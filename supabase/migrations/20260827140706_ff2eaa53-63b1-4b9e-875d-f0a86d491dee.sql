ALTER TABLE public.corrections
  ADD COLUMN IF NOT EXISTS resolution_note text,
  ADD COLUMN IF NOT EXISTS is_public boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS reviewed_at timestamptz,
  ADD COLUMN IF NOT EXISTS reviewed_by uuid;

GRANT SELECT ON public.corrections TO anon;
GRANT UPDATE ON public.corrections TO authenticated;
GRANT ALL ON public.corrections TO service_role;

DROP POLICY IF EXISTS "Public read accepted corrections" ON public.corrections;
CREATE POLICY "Public read accepted corrections"
ON public.corrections
FOR SELECT
TO anon, authenticated
USING (is_public = true AND status = 'accepted');

DROP POLICY IF EXISTS "Admins update corrections" ON public.corrections;
CREATE POLICY "Admins update corrections"
ON public.corrections
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));