import { Hero } from '../components/Hero';
import { services } from '../data/churchData';

const Home = () => {
  return (
    <>
      <Hero />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=70"
                alt="Comunidad de iglesia reunida"
                className="h-96 w-full object-cover sm:h-96 md:h-96"
                loading="lazy"
              />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${service.accent || 'border-cyan-500'}`}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-500 mb-4">{service.time}</p>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300 font-semibold">Vida comunitaria</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Un espacio de amor y servicio</h2>
              <p className="mt-6 text-slate-300 leading-relaxed">
                Descubre cómo nuestras reuniones, ministerios y espacios de oración invitan a cada persona a vivir una fe auténtica y una comunidad cercana.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/nosotros"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Conoce más
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contáctanos
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Comunidad de iglesia reunida"
                className="h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-500 font-semibold">Nuestras prioridades</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Fe, servicio y comunidad</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600 leading-relaxed">
            En cada actividad buscamos impactar vidas con la Palabra, la oración y un llamado a la unidad.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Adoración</h3>
              <p className="text-slate-600 leading-relaxed">Cultos vibrantes donde Jesús es el centro y cada persona es bienvenida.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Oración</h3>
              <p className="text-slate-600 leading-relaxed">Encuentros de oración que fortalecen el alma y la comunión entre los hermanos.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Servicio</h3>
              <p className="text-slate-600 leading-relaxed">Ministerios que cuidan familias, jóvenes, niños y toda la comunidad.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;