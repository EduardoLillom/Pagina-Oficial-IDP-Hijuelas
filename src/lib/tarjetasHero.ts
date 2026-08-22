// lib/tarjetasHero.ts
import type { SupabaseClient } from '@supabase/supabase-js';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export type TipoTarjeta = 'aviso' | 'noticia' | 'evento' | 'cita';

export interface Boton {
  texto: string;
  url: string;
}

export interface TarjetaHero {
  id: string;
  tipo: TipoTarjeta;
  titulo: string;
  contenido: string;
  fecha_evento: string | null;
  cita_referencia: string | null;
  botones: Boton[];
  orden: number;
  is_active: boolean;
  fecha_expiracion: string | null;
  created_at: string;
}

export interface TarjetaHeroInput {
  tipo: TipoTarjeta;
  titulo: string;
  contenido: string;
  fecha_evento?: string | null;
  cita_referencia?: string | null;
  botones?: Boton[];
  orden?: number;
  is_active?: boolean;
  fecha_expiracion?: string | null;
}

const TABLA = 'tarjetas_hero';

/**
 * Tarjetas para el hero público: activas y no expiradas, ordenadas por `orden`.
 */
export async function getTarjetasPublicas(
  supabase: SupabaseClient
): Promise<TarjetaHero[]> {
  const ahora = new Date().toISOString();
  const { data, error } = await supabase
    .from(TABLA)
    .select('*')
    .eq('is_active', true)
    .or(`fecha_expiracion.is.null,fecha_expiracion.gte.${ahora}`)
    .order('orden', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

/**
 * Todas las tarjetas (activas e inactivas) para el panel admin.
 */
export async function getTarjetasAdmin(
  supabase: SupabaseClient
): Promise<TarjetaHero[]> {
  const { data, error } = await supabase
    .from(TABLA)
    .select('*')
    .order('orden', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getTarjetaById(
  supabase: SupabaseClient,
  id: string
): Promise<TarjetaHero | null> {
  const { data, error } = await supabase
    .from(TABLA)
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function crearTarjeta(
  supabase: SupabaseClient,
  input: TarjetaHeroInput
) {
  const { error } = await supabase.from(TABLA).insert({
    tipo: input.tipo,
    titulo: input.titulo,
    contenido: input.contenido,
    fecha_evento: input.tipo === 'evento' ? input.fecha_evento ?? null : null,
    cita_referencia: input.tipo === 'cita' ? input.cita_referencia ?? null : null,
    botones: input.botones ?? [],
    orden: input.orden ?? 0,
    is_active: input.is_active ?? false,
    fecha_expiracion: input.fecha_expiracion ?? null,
  });

  if (error) throw error;
}

export async function actualizarTarjeta(
  supabase: SupabaseClient,
  id: string,
  input: TarjetaHeroInput
) {
  const { error } = await supabase
    .from(TABLA)
    .update({
      tipo: input.tipo,
      titulo: input.titulo,
      contenido: input.contenido,
      fecha_evento: input.tipo === 'evento' ? input.fecha_evento ?? null : null,
      cita_referencia: input.tipo === 'cita' ? input.cita_referencia ?? null : null,
      botones: input.botones ?? [],
      orden: input.orden ?? 0,
      is_active: input.is_active ?? false,
      fecha_expiracion: input.fecha_expiracion ?? null,
    })
    .eq('id', id);

  if (error) throw error;
}

export async function eliminarTarjeta(supabase: SupabaseClient, id: string) {
  const { error } = await supabase.from(TABLA).delete().eq('id', id);
  if (error) throw error;
}

/**
 * Toggle rápido de is_active desde el listado admin, sin pasar por el form completo.
 */
export async function toggleActivaTarjeta(
  supabase: SupabaseClient,
  id: string,
  is_active: boolean
) {
  const { error } = await supabase
    .from(TABLA)
    .update({ is_active })
    .eq('id', id);

  if (error) throw error;
}

/**
 * Convierte hasta 3 pares texto/url sueltos del form (form.get('texto1') etc.)
 * en el array `botones` que se guarda en jsonb. Se descartan los slots vacíos.
 */
export function botonesDesdeFormData(formData: FormData): Boton[] {
  const botones: Boton[] = [];
  for (let i = 1; i <= 3; i++) {
    const texto = (formData.get(`boton_texto_${i}`) as string | null)?.trim();
    const url = (formData.get(`boton_url_${i}`) as string | null)?.trim();
    if (texto && url) botones.push({ texto, url });
  }
  return botones;
}

/**
 * Renderiza `contenido` markdown a HTML seguro para insertar con set:html.
 * Solo se usa para tipos != 'cita' (cita_referencia siempre es texto plano).
 */
export function renderContenidoHtml(contenido: string): string {
  const html = marked.parse(contenido, { async: false }) as string;
  return sanitizeHtml(html, {
    allowedTags: ['p', 'strong', 'em', 'a', 'br', 'ul', 'ol', 'li'],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { target: '_blank', rel: 'noopener noreferrer' }),
    },
  });
}