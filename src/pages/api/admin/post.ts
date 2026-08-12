import type { APIRoute } from 'astro';
import { crearPost, actualizarPost, eliminarPost } from '../../../lib/posts';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const { supabase, user } = locals;
  if (!user) return new Response("No autorizado", { status: 401 });

  const formData = await request.formData();
  const action = formData.get('_action');

  try {
    switch (action) {
      case 'create':
        await crearPost(supabase, {
          title: formData.get('title') as string,
          type: formData.get('type') as string,
          summary: formData.get('summary') as string,
          content: formData.get('content') as string,
          is_active: formData.get('is_active') === 'on',
        });
        break;

      case 'update':
        await actualizarPost(supabase, formData.get('id') as string, {
          title: formData.get('title') as string,
          type: formData.get('type') as string,
          summary: formData.get('summary') as string,
          content: formData.get('content') as string,
          is_active: formData.get('is_active') === 'on',
        });
        break;

      case 'delete':
        await eliminarPost(supabase, formData.get('id') as string);
        break;
    }
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }

  return redirect('/admin/contenido-destacado');
};