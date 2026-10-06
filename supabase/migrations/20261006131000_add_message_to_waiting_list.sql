alter table public.waiting_list
  add column if not exists message text;
