// src/lib/posts.ts
import { supabase } from './supabase';

export async function getActivePosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('is_active', true)
    .order('priority', { ascending: false });

  if (error) throw error;
  return data;
}