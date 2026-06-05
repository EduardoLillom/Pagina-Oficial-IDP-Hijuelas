import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  //useLocation nos da acceso a la ruta actual (pathname)
  const { pathname } = useLocation();

  useEffect(() => {
    // Forzamos al navegador a ir al inicio (X: 0, Y: 0)
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace que el scroll suba deslizándose suavemente
    });
  }, [pathname]); // Este efecto se ejecuta CADA VEZ que el pathname cambia

  return null; // No renderiza nada visualmente
}