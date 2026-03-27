import { NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '@/lib/supabase';

function getAdminAllowlist() {
  return (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function getCookieValue(cookieHeader: string, key: string) {
  const parts = cookieHeader.split(';').map((part) => part.trim());
  const match = parts.find((part) => part.startsWith(`${key}=`));
  if (!match) return '';
  return decodeURIComponent(match.substring(key.length + 1));
}

async function isAdminRequest(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const accessToken = getCookieValue(cookieHeader, 'sb-access-token');

  if (!accessToken) return false;

  const { data, error } = await supabase.auth.getUser(accessToken);
  if (error || !data.user) return false;

  const adminAllowlist = getAdminAllowlist();
  const signedInEmail = data.user.email?.toLowerCase() || '';
  if (adminAllowlist.length > 0 && adminAllowlist.includes(signedInEmail)) {
    return true;
  }

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .maybeSingle();

  return profile?.role === 'admin';
}

export async function POST(request: Request) {
  try {
    const isAdmin = await isAdminRequest(request);
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Server missing SUPABASE_SERVICE_ROLE_KEY.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const mode = body?.mode as 'create' | 'promote';
    const email = (body?.email || '').trim().toLowerCase();

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    if (mode === 'create') {
      const password = body?.password || '';
      const fullName = (body?.fullName || '').trim();

      if (!password || password.length < 6) {
        return NextResponse.json(
          { error: 'Password must be at least 6 characters.' },
          { status: 400 }
        );
      }

      const { data: created, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: fullName ? { full_name: fullName } : undefined,
      });

      if (createError || !created.user) {
        if (createError?.status === 422 || createError?.code === 'email_exists') {
          return NextResponse.json({ error: 'User already exists. Use promote option.' }, { status: 409 });
        }

        return NextResponse.json(
          { error: createError?.message || 'Failed to create user.' },
          { status: 500 }
        );
      }

      const { error: profileError } = await supabaseAdmin
        .from('profiles')
        .upsert(
          {
            id: created.user.id,
            email,
            full_name: fullName || null,
            role: 'admin',
            status: 'active',
          },
          { onConflict: 'id' }
        );

      if (profileError) {
        return NextResponse.json(
          { error: profileError.message || 'User created but profile setup failed.' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        action: 'created',
        user: {
          id: created.user.id,
          email,
          role: 'admin',
        },
      });
    }

    if (mode === 'promote') {
      const { data: profile, error: profileLookupError } = await supabaseAdmin
        .from('profiles')
        .select('id, email')
        .ilike('email', email)
        .maybeSingle();

      if (profileLookupError) {
        return NextResponse.json(
          { error: profileLookupError.message || 'Failed to lookup user profile.' },
          { status: 500 }
        );
      }

      if (!profile) {
        return NextResponse.json(
          { error: 'User not found. Create the user first, then promote.' },
          { status: 404 }
        );
      }

      const { error: promoteError } = await supabaseAdmin
        .from('profiles')
        .update({ role: 'admin', status: 'active' })
        .eq('id', profile.id);

      if (promoteError) {
        return NextResponse.json(
          { error: promoteError.message || 'Failed to promote user.' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        action: 'promoted',
        user: {
          id: profile.id,
          email,
          role: 'admin',
        },
      });
    }

    return NextResponse.json({ error: 'Invalid mode. Use create or promote.' }, { status: 400 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to manage admin user.' }, { status: 500 });
  }
}
