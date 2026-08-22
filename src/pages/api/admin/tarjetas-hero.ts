// src/pages/api/admin/tarjetas-hero.ts
import type { APIRoute } from 'astro';
import {
  crearTarjeta,
  actualizarTarjeta,
  eliminarTarjeta,
  toggleActivaTarjeta,
  botonesDesdeFormData,
  type TipoTarjeta,
} from '../../../lib/tarjetasHero';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  if (!locals.user) {
    return redirect('/admin/login');
  }

  const supabase = locals.supabase;
  const formData = await request.formData();
  const action = formData.get('action') as string;

  try {
    switch (action) {
      case 'crear': {
        await crearTarjeta(supabase, {
          tipo: formData.get('tipo') as TipoTarjeta,
          titulo: formData.get('titulo') as string,
          contenido: formData.get('contenido') as string,
          fecha_evento: (formData.get('fecha_evento') as string) || null,
          cita_referencia: (formData.get('cita_referencia') as string) || null,
          botones: botonesDesdeFormData(formData),
          orden: Number(formData.get('orden') ?? 0),
          is_active: formData.get('is_active') === 'on',
          fecha_expiracion: (formData.get('fecha_expiracion') as string) || null,
        });
        return redirect('/admin/tarjetas-hero');
      }

      case 'editar': {
        const id = formData.get('id') as string;
        await actualizarTarjeta(supabase, id, {
          tipo: formData.get('tipo') as TipoTarjeta,
          titulo: formData.get('titulo') as string,
          contenido: formData.get('contenido') as string,
          fecha_evento: (formData.get('fecha_evento') as string) || null,
          cita_referencia: (formData.get('cita_referencia') as string) || null,
          botones: botonesDesdeFormData(formData),
          orden: Number(formData.get('orden') ?? 0),
          is_active: formData.get('is_active') === 'on',
          fecha_expiracion: (formData.get('fecha_expiracion') as string) || null,
        });
        return redirect('/admin/contenido-destacado');
      }

      case 'eliminar': {
        const id = formData.get('id') as string;
        await eliminarTarjeta(supabase, id);
        return redirect('/admin/contenido-destacado');
      }

      case 'toggle': {
        const id = formData.get('id') as string;
        const nuevoEstado = formData.get('nuevo_estado') === 'true';
        await toggleActivaTarjeta(supabase, id, nuevoEstado);
        return redirect('/admin/contenido-destacado');
      }

      default:
        return redirect('/admin/contenido-destacado?error=accion_invalida');
    }
  } catch (err) {
    console.error('Error en api/admin/tarjetas-hero:', err);
    return redirect('/admin/contenido-destacado?error=guardado');
  }
};