import { supabase } from '@/lib/supabaseClient';

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const { error } = await supabase.from('waiting-list').insert([{ name, email }]);

  if (error) {
    console.error('Supabase insert failed:', error);
    return jsonResponse({ error: error.message }, 500);
  }

  return jsonResponse({ message: 'You’re on the A-list 🥂' });
}
