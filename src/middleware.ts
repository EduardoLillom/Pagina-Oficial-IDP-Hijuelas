import { defineMiddleware } from "astro:middleware";
import { createSupabaseServerClient } from "./lib/supabase";

export const onRequest = defineMiddleware(async (context, next) => {
  const supabase = createSupabaseServerClient({
    request: context.request,
    cookies: context.cookies,
  });

  // getUser() valida el JWT contra Supabase Y refresca la sesión si hace falta
  const { data: { user } } = await supabase.auth.getUser();

  context.locals.supabase = supabase;
  context.locals.user = user;

  if (context.url.pathname.startsWith("/admin") &&
      context.url.pathname !== "/admin/login" &&
      !user) {
    return context.redirect("/admin/login");
  }

  return next();
});