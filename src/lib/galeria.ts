import type { SupabaseClient } from "@supabase/supabase-js";
import { supabasePublic } from './supabase';

export interface AlbumInput {
  titulo: string;
  descripcion?: string;
  url_album: string;
  orden?: number;
}

const BUCKET = 'galeria';

// Sube el archivo de portada al bucket y devuelve la URL pública
export async function subirPortada(supabase: SupabaseClient, file: File): Promise<string> {
  const ext = file.name.split('.').pop();
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, file);
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

// Extrae el path del archivo a partir de la URL pública, para poder borrarlo
function pathFromPublicUrl(url: string): string | null {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);
  if (idx === -1) return null;
  return url.slice(idx + marker.length);
}

export async function borrarPortada(supabase: SupabaseClient, url: string) {
  const path = pathFromPublicUrl(url);
  if (!path) return; // no era una URL de nuestro bucket, no hay nada que borrar
  await supabase.storage.from(BUCKET).remove([path]);
}

export async function crearAlbum(supabase: SupabaseClient, datos: AlbumInput & { url_portada: string }) {
  if (!datos.titulo || !datos.url_album || !datos.url_portada) {
    throw new Error("Título, link del álbum y portada son obligatorios");
  }
  const { error } = await supabase.from('galeria').insert([datos]);
  if (error) throw error;
}

export async function actualizarAlbum(supabase: SupabaseClient, id: string, datos: AlbumInput & { url_portada: string }) {
  if (!datos.titulo || !datos.url_album || !datos.url_portada) {
    throw new Error("Título, link del álbum y portada son obligatorios");
  }
  const { error } = await supabase.from('galeria').update(datos).eq('id', id);
  if (error) throw error;
}

export async function eliminarAlbum(supabase: SupabaseClient, id: string) {
  const album = await getAlbumById(id);
  if (album?.url_portada) {
    await borrarPortada(supabase, album.url_portada);
  }
  const { error } = await supabase.from('galeria').delete().eq('id', id);
  if (error) throw error;
}

export async function getAlbumes() {
  const { data, error } = await supabasePublic
    .from('galeria')
    .select('*')
    .order('orden', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getAlbumById(id: string) {
  const { data, error } = await supabasePublic
    .from('galeria')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data;
}