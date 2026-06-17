import { supabase } from './supabase';

// Obtener eventos activos/todos para el admin
export async function getEventos() {
  const { data, error } = await supabase
    .from('eventos')
    .select('*')
    // Ordenar cronológicamente para que el admin vea la agenda organizada
    .order('fecha', { ascending: true })
    .order('hora', { ascending: true });

  if (error) throw error;
  return data;
}

// Función para obtener un evento específico (útil para la página de editar)
export async function getEventoById(id: string) {
  const { data, error } = await supabase
    .from('eventos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}