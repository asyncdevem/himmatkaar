import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function mapAmbassadorFromDb(ambassador: Record<string, any>) {
  return {
    ...ambassador,
    linkedin: ambassador.linkedin_url ?? '',
  };
}

function mapAmbassadorToDb(body: Record<string, any>) {
  const { linkedin, linkedin_url, ...rest } = body;
  return {
    ...rest,
    linkedin_url: linkedin_url ?? linkedin ?? null,
  };
}

export async function GET() {
  try {
    const { data: ambassadors, error } = await supabaseAdmin
      .from('ambassadors')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ambassadors: (ambassadors || []).map(mapAmbassadorFromDb) });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch ambassadors' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = mapAmbassadorToDb(body);
    
    const { data: ambassador, error } = await supabaseAdmin
      .from('ambassadors')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ambassador: mapAmbassadorFromDb(ambassador) }, { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to create ambassador' }, { status: 500 });
  }
}
