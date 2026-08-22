import { supabasePublic } from './supabase';
import type { SupabaseClient } from "@supabase/supabase-js";

export interface EventoInput {
  title: string;
  descripcion: string;
  fecha: string;
  hora: string;
}

export async function crearEvento(supabase: SupabaseClient, datos: EventoInput) {
  if (!datos.title || !datos.fecha) {
    throw new Error("Título y fecha son obligatorios");
  }
  const { error } = await supabase.from('eventos').insert([datos]);
  if (error) throw error;
}

export async function eliminarEvento(supabase: SupabaseClient, id: string) {
  const { error } = await supabase.from('eventos').delete().eq('id', id);
  if (error) throw error;
}

export async function actualizarEvento(supabase: SupabaseClient, id: string, datos: EventoInput) {
  if (!datos.title || !datos.fecha) {
    throw new Error("Título y fecha son obligatorios");
  }
  const { error } = await supabase.from('eventos').update(datos).eq('id', id);
  if (error) throw error;
}


// Obtener eventos activos/todos para el admin
export async function getEventos() {
  // Obtenemos la fecha de hoy en formato 'YYYY-MM-DD'
  const hoy = new Date().toISOString().split('T')[0];

  const { data, error } = await supabasePublic
    .from('eventos') // Asegúrate de cambiar esto a 'monthly_programs' si renombraste la tabla
    .select('*')
    .gte('fecha', hoy) // Filtra: fecha >= hoy
    .order('fecha', { ascending: true })
    .order('hora', { ascending: true });

  if (error) throw error;
  return data;
}

// Función para obtener un evento específico (útil para la página de editar)
export async function getEventoById(id: string) {
  const { data, error } = await supabasePublic
    .from('eventos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}