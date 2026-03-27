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

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAdmin = await isAdminRequest(request);
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    
    const { error } = await supabaseAdmin
      .from('contact_messages')
      .update(body)
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}
