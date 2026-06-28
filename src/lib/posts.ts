// src/lib/posts.ts
import { supabase } from './supabase';

// Tipo que refleja la estructura real en la base de datos
export interface Post {
  id: string | number;
  type: string;
  title: string;
  summary: string;
  content?: string; // Opcional por si es nulo en la BD
  target_url: string;
  buttonText: string;
  is_active: boolean;
  priority: number;
}

// Tipo que consume tu componente de UI (simplificado)
export interface Slide {
  type: string;
  title: string;
  summary: string;
  target_url: string;
  buttonText: string;
}

export async function getActivePosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('is_active', true)
    .order('priority', { ascending: false });

  if (error) throw error;
  return data as Post[];
}