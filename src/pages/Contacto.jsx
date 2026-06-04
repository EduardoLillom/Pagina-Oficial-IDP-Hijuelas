import SectionTitle from "../components/SectionTitle";

const Contacto = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div className="rounded-4xl bg-white p-10 shadow-2xl border border-slate-200">
            <SectionTitle title="Contacto" />
            <p className="mt-4 text-slate-600 leading-relaxed">
              Estamos felices de recibir tu visita. Nuestro equipo está disponible para apoyarte en consultas, oración y orientación pastoral.
            </p>

            <div className="mt-10 grid gap-6">
              <div className="rounded-4xl bg-cyan-600/10 border border-cyan-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Visítanos</h3>
                <p className="text-slate-600">Calle Falsa 123, Santiago, Chile</p>
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=70"
                alt="Iglesia en comunidad"
                className="h-64 sm:h-80 md:h-96 w-full object-cover"
                loading="lazy"
              />
                  +56 9 1234 5678
                </p>
                <p className="mt-4 text-slate-600">
                  <span className="block font-medium text-slate-900">Correo:</span>
                  contacto@idiglesia.cl
                </p>
              </div>
            </div>

            <div className="mt-10">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Nombre" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none" />
                  <input type="email" placeholder="Correo electrónico" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none" />
                </div>
                <textarea placeholder="Tu mensaje" rows="5" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none" />
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl overflow-hidden shadow-2xl ring-1 ring-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
                alt="Iglesia en comunidad"
                className="h-96 w-full object-cover"
              />
            </div>
            <div className="rounded-4xl bg-white border border-slate-200 p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Encuéntranos en persona</h3>
              <p className="text-slate-600 leading-relaxed">
                Ven y conoce nuestro espacio de reuniones. Estaremos encantados de recibirte en nuestra comunidad.
              </p>
              <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
                Enviar mensaje por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;