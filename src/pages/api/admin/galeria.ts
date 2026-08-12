import type { APIRoute } from 'astro';
import { crearAlbum, actualizarAlbum, eliminarAlbum, subirPortada, borrarPortada } from '../../../lib/galeria';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const { supabase, user } = locals;
  if (!user) return new Response("No autorizado", { status: 401 });

  const formData = await request.formData();
  const action = formData.get('_action');

  try {
    switch (action) {
      case 'create': {
        const file = formData.get('portada') as File;
        if (!file || file.size === 0) {
          return new Response("La imagen de portada es obligatoria", { status: 400 });
        }
        const url_portada = await subirPortada(supabase, file);
        await crearAlbum(supabase, {
          titulo: formData.get('titulo') as string,
          descripcion: formData.get('descripcion') as string,
          url_album: formData.get('url_album') as string,
          orden: Number(formData.get('orden')) || 0,
          url_portada,
        });
        break;
      }

      case 'update': {
        const id = formData.get('id') as string;
        const file = formData.get('portada') as File;
        let url_portada = formData.get('url_portada_actual') as string;

        if (file && file.size > 0) {
          const nueva = await subirPortada(supabase, file);
          if (url_portada) await borrarPortada(supabase, url_portada);
          url_portada = nueva;
        }

        await actualizarAlbum(supabase, id, {
          titulo: formData.get('titulo') as string,
          descripcion: formData.get('descripcion') as string,
          url_album: formData.get('url_album') as string,
          orden: Number(formData.get('orden')) || 0,
          url_portada,
        });
        break;
      }

      case 'delete':
        await eliminarAlbum(supabase, formData.get('id') as string);
        break;
    }
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }

  return redirect('/admin/galeria');
};