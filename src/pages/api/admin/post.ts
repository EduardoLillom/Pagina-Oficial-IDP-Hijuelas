// src/pages/api/admin/post.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  // 1. Extraer el token de las cookies manualmente
  const accessToken = cookies.get("sb-access-token")?.value;

  if (!accessToken) {
    return new Response("No autorizado: Falta token", { status: 401 });
  }

  // 2. Validar el usuario directamente con el token
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);

  if (error || !user) {
    return new Response("No autorizado: Token inválido", { status: 401 });
  }

  // 3. Procesar el formulario
  const formData = await request.formData();
  const action = formData.get('_action');

  switch (action) {
    case 'create':
      const { error: createErr } = await supabase.from('posts').insert([{
        title: formData.get('title'),
        type: formData.get('type'),
        summary: formData.get('summary'),
        content: formData.get('content'),
        is_active: formData.get('is_active') === 'on',
      }]);
      if (createErr) return new Response(createErr.message, { status: 500 });
      break;

    case 'delete':
      const { error: delErr } = await supabase.from('posts').delete().eq('id', formData.get('id'));
      if (delErr) return new Response(delErr.message, { status: 500 });
      break;
  }

  return redirect('/admin/contenido-destacado');
};