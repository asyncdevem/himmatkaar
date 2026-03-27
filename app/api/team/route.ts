import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

function mapMemberFromDb(member: Record<string, any>) {
  return {
    ...member,
    linkedin: member.linkedin_url ?? '',
  };
}

function mapMemberToDb(body: Record<string, any>) {
  const { linkedin, linkedin_url, ...rest } = body;
  return {
    ...rest,
    linkedin_url: linkedin_url ?? linkedin ?? null,
  };
}

export async function GET() {
  try {
    const { data: members, error } = await supabaseAdmin
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ members: (members || []).map(mapMemberFromDb) });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = mapMemberToDb(body);
    
    const { data: member, error } = await supabaseAdmin
      .from('team_members')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ member: mapMemberFromDb(member) }, { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}
