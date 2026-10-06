import { supabase } from '@/lib/supabaseClient';

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(req: Request) {
  const body = await req.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!name || !email) {
    return jsonResponse({ error: "Name and email are required." }, 400);
  }

  const { error } = await supabase.from("waiting_list").insert([{ name, email }]);

  if (error) {
    console.error('Supabase insert failed:', error);
    return jsonResponse({ error: error.message }, 500);
  }

  return jsonResponse({ message: 'You’re on the A-list 🥂' });
}
