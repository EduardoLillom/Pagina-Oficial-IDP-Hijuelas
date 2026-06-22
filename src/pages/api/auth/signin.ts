// src/pages/api/auth/signin.ts
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email y contraseña requeridos", { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  // Profesional: Usar las propiedades de cookie de Supabase si es posible,
  // o asignar manualmente con flags de seguridad estrictos.
  const { access_token, refresh_token } = data.session;
  
  cookies.set("sb-access-token", access_token, {
    path: "/",
    httpOnly: true,
    secure: true, // ¡Obligatorio en producción!
    sameSite: "lax",
  });

  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  return redirect("/admin");
};