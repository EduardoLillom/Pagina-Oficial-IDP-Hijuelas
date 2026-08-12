import type { APIRoute } from 'astro';
import { crearEvento, actualizarEvento, eliminarEvento } from '../../../lib/eventos';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const { supabase, user } = locals;
  if (!user) return new Response("No autorizado", { status: 401 });

  const formData = await request.formData();
  const action = formData.get('_action');

  try {
    switch (action) {
      case 'create':
        await crearEvento(supabase, {
          title: formData.get('title') as string,
          descripcion: formData.get('descripcion') as string,
          fecha: formData.get('fecha') as string,
          hora: formData.get('hora') as string,
        });
        break;

      case 'update':
        await actualizarEvento(supabase, formData.get('id') as string, {
          title: formData.get('title') as string,
          descripcion: formData.get('descripcion') as string,
          fecha: formData.get('fecha') as string,
          hora: formData.get('hora') as string,
        });
        break;

      case 'delete':
        await eliminarEvento(supabase, formData.get('id') as string);
        break;
    }
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }

  return redirect('/admin/eventos');
};