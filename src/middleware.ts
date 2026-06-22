import { defineMiddleware } from "astro:middleware";
import { supabase } from "./lib/supabase";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;

  // 1. Solo proteger rutas bajo /admin
  if (url.pathname.startsWith("/admin")) {
    const accessToken = cookies.get("sb-access-token")?.value;
    const refreshToken = cookies.get("sb-refresh-token")?.value;

    // 2. Si no hay tokens y no está en login, redirigir
    if (!accessToken && url.pathname !== "/admin/login") {
      return redirect("/admin/login");
    }

    // 3. Validar si el usuario existe (autenticación)
    if (accessToken) {
      const { data: { user }, error } = await supabase.auth.getUser(accessToken);
      
      if (error || !user) {
        // Token inválido o expirado
        cookies.delete("sb-access-token", { path: "/" });
        cookies.delete("sb-refresh-token", { path: "/" });
        return redirect("/admin/login");
      }
    }
  }

  return next();
});