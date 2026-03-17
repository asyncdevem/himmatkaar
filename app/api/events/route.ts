import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';
    const status = searchParams.get('status') || 'upcoming';

    const { data: events, error } = await supabase
      .from('events')
      .select('*')
      .eq('status', status)
      .order('date', { ascending: true })
      .limit(parseInt(limit));

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ events: events || [] });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { data: event, error } = await supabase
      .from('events')
      .insert([body])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ event }, { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
