CREATE TABLE public.checkout_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  source text NOT NULL,
  user_agent text,
  ip_hash text,
  referrer text,
  url text
);

GRANT INSERT ON public.checkout_clicks TO anon;
GRANT ALL ON public.checkout_clicks TO service_role;

ALTER TABLE public.checkout_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert"
  ON public.checkout_clicks FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Service role full access"
  ON public.checkout_clicks FOR ALL TO service_role
  USING (true) WITH CHECK (true);