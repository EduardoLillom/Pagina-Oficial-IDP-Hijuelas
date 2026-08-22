import type { SupabaseClient } from '@supabase/supabase-js';

export interface Hito {
  id: string;
  titulo: string;
  descripcion: string | null;
  fecha: string; // ISO date
  url_imagen: string | null;
  orden: number;
  created_at: string;
}

export interface HitoInput {
  titulo: string;
  descripcion: string | null;
  fecha: string;
  url_imagen: string | null;
  orden: number;
}

export async function getHitos(supabase: SupabaseClient): Promise<Hito[]> {
  const { data, error } = await supabase
    .from('hitos')
    .select('*')
    .order('fecha', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getHitoById(
  supabase: SupabaseClient,
  id: string
): Promise<Hito | null> {
  const { data, error } = await supabase
    .from('hitos')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function createHito(
  supabase: SupabaseClient,
  input: HitoInput
): Promise<void> {
  const { error } = await supabase.from('hitos').insert(input);
  if (error) throw error;
}

export async function updateHito(
  supabase: SupabaseClient,
  id: string,
  input: HitoInput
): Promise<void> {
  const { error } = await supabase.from('hitos').update(input).eq('id', id);
  if (error) throw error;
}

export async function deleteHito(supabase: SupabaseClient, id: string): Promise<void> {
  const hito = await getHitoById(supabase, id);

  if (hito?.url_imagen) {
    const path = hito.url_imagen.split('/hitos/')[1];
    if (path) {
      await supabase.storage.from('hitos').remove([path]);
    }
  }

  const { error } = await supabase.from('hitos').delete().eq('id', id);
  if (error) throw error;
}

export async function subirImagenHito(
  supabase: SupabaseClient,
  file: File
): Promise<string> {
  const ext = file.name.split('.').pop();
  const nombreArchivo = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from('hitos')
    .upload(nombreArchivo, file);

  if (error) throw error;

  const { data } = supabase.storage.from('hitos').getPublicUrl(nombreArchivo);
  return data.publicUrl;
}