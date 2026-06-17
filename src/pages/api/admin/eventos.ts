import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  // 1. Extraer el token de las cookies
  const accessToken = cookies.get("sb-access-token")?.value;

  if (!accessToken) {
    return new Response("No autorizado: Falta token", { status: 401 });
  }

  // 2. Validar usuario
  const { data: { user }, error: authErr } = await supabase.auth.getUser(accessToken);

  if (authErr || !user) {
    return new Response("No autorizado: Token inválido", { status: 401 });
  }

  // 3. Procesar el formulario
  const formData = await request.formData();
  const action = formData.get('_action');

  switch (action) {
    case 'create':
      const { error: createErr } = await supabase.from('eventos').insert([{
        title: formData.get('title'),
        descripcion: formData.get('descripcion'),
        fecha: formData.get('fecha'),
        hora: formData.get('hora'),
      }]);
      if (createErr) return new Response(createErr.message, { status: 500 });
      break;

    case 'delete':
      const { error: delErr } = await supabase.from('eventos').delete().eq('id', formData.get('id'));
      if (delErr) return new Response(delErr.message, { status: 500 });
      break;
  }

  return redirect('/admin/eventos');
};