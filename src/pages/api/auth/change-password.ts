import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const newPassword = formData.get('newPassword')?.toString();
  const confirmPassword = formData.get('confirmPassword')?.toString();

  if (!newPassword || !confirmPassword || newPassword !== confirmPassword) {
    return redirect('/admin/change-password?status=match-error');
  }

  // Aquí se puede conectar con el backend de Supabase o el sistema de autenticación.
  return redirect('/admin/change-password?status=success');
};
