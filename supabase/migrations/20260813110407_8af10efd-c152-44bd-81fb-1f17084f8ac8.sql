CREATE TABLE public.audit_log (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  table_name text NOT NULL,
  record_id uuid,
  company_slug text,
  action text NOT NULL,
  changed_fields jsonb NOT NULL DEFAULT '{}'::jsonb,
  actor_id uuid,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.audit_log TO authenticated;
GRANT ALL ON public.audit_log TO service_role;

ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admins read audit log" ON public.audit_log FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX audit_log_created_at_idx ON public.audit_log (created_at DESC);

CREATE OR REPLACE FUNCTION public.log_company_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  diff jsonb := '{}'::jsonb;
  k text;
  old_j jsonb;
  new_j jsonb;
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.audit_log (table_name, record_id, company_slug, action, changed_fields, actor_id)
    VALUES (TG_TABLE_NAME, NEW.id, NEW.slug, 'INSERT', to_jsonb(NEW), auth.uid());
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO public.audit_log (table_name, record_id, company_slug, action, changed_fields, actor_id)
    VALUES (TG_TABLE_NAME, OLD.id, OLD.slug, 'DELETE', to_jsonb(OLD), auth.uid());
    RETURN OLD;
  ELSE
    old_j := to_jsonb(OLD);
    new_j := to_jsonb(NEW);
    FOR k IN SELECT jsonb_object_keys(new_j) LOOP
      IF (old_j -> k) IS DISTINCT FROM (new_j -> k) AND k <> 'updated_at' THEN
        diff := diff || jsonb_build_object(k, jsonb_build_object('from', old_j -> k, 'to', new_j -> k));
      END IF;
    END LOOP;
    IF diff <> '{}'::jsonb THEN
      INSERT INTO public.audit_log (table_name, record_id, company_slug, action, changed_fields, actor_id)
      VALUES (TG_TABLE_NAME, NEW.id, NEW.slug, 'UPDATE', diff, auth.uid());
    END IF;
    RETURN NEW;
  END IF;
END;
$$;

CREATE TRIGGER companies_audit
AFTER INSERT OR UPDATE OR DELETE ON public.companies
FOR EACH ROW EXECUTE FUNCTION public.log_company_change();