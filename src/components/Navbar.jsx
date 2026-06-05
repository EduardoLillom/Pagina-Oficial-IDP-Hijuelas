import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/ministerios', label: 'Ministerios' },
  { to: '/galeria', label: 'Galería' },
  { to: '/horarios', label: 'Horarios' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/construccion', label: 'Construcción' },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-white/85 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          {/* El círculo del logo se achica un poco en móvil para dar espacio */}
          <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl bg-cyan-600 text-base sm:text-lg font-extrabold text-white shadow-lg shadow-cyan-500/20">
            IDP
          </div>
          {/* El texto ya no se oculta, solo se adapta */}
          <div className="flex flex-col min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
              IDP Hijuelas
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.28em] text-slate-500 truncate">
              Fe, unidad y santidad
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors ${pathname === item.to ? 'text-slate-900' : 'hover:text-cyan-600'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500 md:inline-flex"
          >
            Contáctanos
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600 md:hidden"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="text-xl">{isMenuOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-slate-200/10 bg-white/95 shadow-sm`}>
        <nav className="space-y-2 px-4 py-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-xl px-3 py-3 transition-colors ${pathname === item.to ? 'bg-slate-100 text-slate-900' : 'hover:bg-slate-100 hover:text-cyan-600'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-full bg-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500"
          >
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
};