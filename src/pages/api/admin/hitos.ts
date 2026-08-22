import type { APIRoute } from 'astro';
import {
  createHito,
  updateHito,
  deleteHito,
  subirImagenHito,
  type HitoInput,
} from '../../../lib/hitos';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  if (!locals.user) {
    return redirect('/admin/login');
  }

  const supabase = locals.supabase;
  const formData = await request.formData();
  const accion = formData.get('accion')?.toString();

  try {
    if (accion === 'eliminar') {
      const id = formData.get('id')?.toString();
      if (!id) throw new Error('Falta id');
      await deleteHito(supabase, id);
      return redirect('/admin/hitos-templo');
    }

    const titulo = formData.get('titulo')?.toString() ?? '';
    const descripcion = formData.get('descripcion')?.toString() || null;
    const fecha = formData.get('fecha')?.toString() ?? '';
    const orden = Number(formData.get('orden') ?? 0);
    const file = formData.get('imagen') as File | null;

    let url_imagen: string | null =
      formData.get('url_imagen_actual')?.toString() || null;

    if (file && file.size > 0) {
      url_imagen = await subirImagenHito(supabase, file);
    }

    const input: HitoInput = { titulo, descripcion, fecha, url_imagen, orden };

    if (accion === 'crear') {
      await createHito(supabase, input);
    } else if (accion === 'editar') {
      const id = formData.get('id')?.toString();
      if (!id) throw new Error('Falta id');
      await updateHito(supabase, id, input);
    }

    return redirect('/admin/hitos-templo');
  } catch (err) {
    console.error(err);
    return redirect('/admin/hitos-templo?error=1');
  }
};