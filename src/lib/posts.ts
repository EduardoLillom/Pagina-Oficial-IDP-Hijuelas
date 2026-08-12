// src/lib/posts.ts
import { supabasePublic } from './supabase';
import type { SupabaseClient } from "@supabase/supabase-js"; 

// Tipo que refleja la estructura real en la base de datos
export interface Post {
  id: string | number;
  type: string;
  title: string;
  summary: string;
  content?: string; // Opcional por si es nulo en la BD
  target_url: string;
  is_active: boolean;
  priority: number;
}

// Tipo que consume tu componente de UI (simplificado)
export interface Slide {
  type: string;
  title: string;
  summary: string;
  target_url: string;
}

export interface PostInput {
  title: string;
  type: string;
  summary: string;
  content?: string;
  is_active: boolean;
}

export async function crearPost(supabase: SupabaseClient, datos: PostInput) {
  if (!datos.title || !datos.type) {
    throw new Error("Título y tipo son obligatorios");
  }
  const { error } = await supabase.from('posts').insert([datos]);
  if (error) throw error;
}

export async function eliminarPost(supabase: SupabaseClient, id: string) {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) throw error;
}

export async function actualizarPost(supabase: SupabaseClient, id: string, datos: PostInput) {
  if (!datos.title || !datos.type) {
    throw new Error("Título y tipo son obligatorios");
  }
  const { error } = await supabase.from('posts').update(datos).eq('id', id);
  if (error) throw error;
}

export async function getActivePosts(): Promise<Post[]> {
  const { data, error } = await supabasePublic
    .from('posts')
    .select('*')
    .eq('is_active', true)
    .order('priority', { ascending: false });

  if (error) throw error;
  return data as Post[];
}

export async function getPostById(supabase: SupabaseClient, id: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data as Post | null;
}