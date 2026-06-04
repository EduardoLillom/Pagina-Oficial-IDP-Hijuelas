import { Link } from 'react-router-dom';

export const Hero = () => (
  <header className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.85),rgba(15,23,42,0.98))]" />
      {/* Imagen adaptada a móviles: imagen más pequeña en mobile, más grande en desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?auto=format&fit=crop&w=1200&q=60')",
          backgroundAttachment: 'fixed'
        }}
      />

    <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
      {/* CAMBIO AQUÍ: Se agregó 'mx-auto' para centrar todo el bloque */}
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Iglesia de Dios de la Profecía</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Una comunidad viva de fe, servicio y encuentro.
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          En Hijuelas cultivamos adoración sincera, crecimiento espiritual y un ministerio que abraza a toda la familia.
        </p>

        <div className="mx-auto flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/nosotros/mision"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Conoce nuestra misión
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Escríbenos
          </Link>
        </div>
      </div>
    </div>
  </header>
);