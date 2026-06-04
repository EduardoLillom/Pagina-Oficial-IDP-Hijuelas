import { useEffect, useState, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const tabs = [
  { id: "quienes", label: "Quiénes somos" },
  { id: "vision", label: "Nuestra visión" },
  { id: "mision", label: "Nuestra misión" },
];

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=70"
              alt="Iglesia reunida"
              className="h-full w-full object-cover"
              loading="lazy"
            />
    title: "Gente que procura la santidad",
    text: "Nacimos del arrollador avivamiento de las reuniones campestres de santidad. El llamado a la santidad está profundamente arraigado en nuestras raíces.",
  },
  {
    title: "Lleno del Espíritu",
    text: "La promesa profética de que 'en los últimos días derramará Su Espíritu' sigue siendo una parte central de nuestro ADN mundial.",
  },
  {
    title: "Abierto a todas las naciones",
    text: "Nos aferramos al ideal de que la iglesia de Dios estaría compuesta por toda 'tribu, lengua, pueblo y nación'. Celebramos la diversidad.",
  },
  {
    title: "Hacedor de discípulos",
    text: "Por más de un siglo de ministerio, esta red familiar se ha comprometido con el mandato bíblico de la Gran Comisión.",
  },
  {
    title: "Establecedor de iglesias",
    text: "Las iglesias sanas que plantan nuevas iglesias contribuyen en gran medida a la difusión del evangelio en todo el mundo.",
  },
  {
    title: "Unión cristiana",
    text: "Nos proponemos cooperar con todos los que exaltan el nombre de Cristo y Su gran evangelio en un espíritu de unidad.",
  },
];

const Nosotros = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tab || "quienes");
  const contentRef = useRef(null);

  useEffect(() => {
    const validTabs = ["quienes", "vision", "mision"];
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    } else if (!tab) {
      setActiveTab("quienes");
    } else {
      navigate("/nosotros/quienes", { replace: true });
    }
  }, [tab, navigate]);

  const handleTabClick = () => {
    if (window.innerWidth < 1024 && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section className="bg-slate-50 py-12 md:py-20 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-10 md:space-y-16">
        
        {/* Sección Header Principal */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <SectionTitle title="Sobre Nosotros" />
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Somos una familia de fe que busca glorificar a Cristo, vivir en espíritu de santidad y extender el evangelio a Hijuelas y más allá.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition border border-slate-100">
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-cyan-600 font-bold">Historia</p>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">Más de un siglo de ministerio, tradición y un testimonio vivo en la región.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition border border-slate-100">
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-cyan-600 font-bold">Unidad</p>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">Unidos en la adoración, en el servicio y en el llamado a la renovación espiritual.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/contacto" className="w-full sm:w-auto text-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-500 active:scale-98">
                Contáctanos
              </Link>
              <Link to="/ministerios" className="w-full sm:w-auto text-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-98">
                Ver ministerios
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2 h-48 sm:h-64 lg:h-full min-h-[250px] lg:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              alt="Iglesia reunida"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bloque Navegador de Pestañas con Scroll Snapping */}
        <div ref={contentRef} className="rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-md scroll-mt-6">
          <div className="flex flex-col items-center gap-3 text-center mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-600 font-bold">Explora</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Nuestra historia, visión y misión</h2>
            <p className="max-w-2xl text-slate-500 text-sm md:text-base">
              Navega por nuestras secciones para comprender mejor quiénes somos, hacia dónde vamos y cómo servimos a la comunidad.
            </p>
          </div>

          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
            <div className="inline-flex rounded-full bg-slate-100 p-1 mb-2 whitespace-nowrap min-w-full md:min-w-0">
              {tabs.map((tabItem) => (
                <Link
                  key={tabItem.id}
                  to={`/nosotros/${tabItem.id}`}
                  onClick={handleTabClick}
                  className={`flex-1 md:flex-initial text-center px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 select-none snap-center snap-always ${
                    activeTab === tabItem.id 
                      ? 'bg-slate-950 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {tabItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Área de Contenido Dinámico */}
        <div className="transition-all duration-300">
          {activeTab === "quienes" && (
            <div className="space-y-6 md:space-y-8">
              <div className="rounded-3xl bg-white p-6 md:p-10 shadow-md border border-slate-100">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Quién es la Iglesia de Dios de la Profecía</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  La Iglesia de Dios de la Profecía es un vibrante movimiento cristiano fundamentado en las Escrituras, firme en la fe y decidido en su pasión por las personas. Somos un body mundial de creyentes, unidos en la adoración, que trabajan hombro a hombro para compartir el amor de Dios y un mensaje de esperanza para los quebrantados de corazón.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl bg-linear-to-br from-cyan-50/60 to-slate-50 border border-cyan-100/70 p-5 md:p-6 shadow-xs">
                  <p className="text-xs uppercase tracking-wider text-cyan-700 font-bold mb-2">Impacto Global</p>
                  <p className="text-2xl md:text-3xl font-black text-slate-900 mb-1">300</p>
                  <p className="text-slate-600 text-xs md:text-sm">personas reciben salvación cada 24 horas</p>
                </div>
                <div className="rounded-2xl bg-linear-to-br from-cyan-50/60 to-slate-50 border border-cyan-100/70 p-5 md:p-6 shadow-xs">
                  <p className="text-xs uppercase tracking-wider text-cyan-700 font-bold mb-2">Bautismos</p>
                  <p className="text-2xl md:text-3xl font-black text-slate-900 mb-1">~100</p>
                  <p className="text-slate-600 text-xs md:text-sm">personas bautizadas en agua cada día</p>
                </div>
                <div className="rounded-2xl bg-linear-to-br from-cyan-50/60 to-slate-50 border border-cyan-100/70 p-5 md:p-6 shadow-xs sm:col-span-2 lg:col-span-1">
                  <p className="text-xs uppercase tracking-wider text-cyan-700 font-bold mb-2">Predicadores</p>
                  <p className="text-2xl md:text-3xl font-black text-slate-900 mb-1">14,000+</p>
                  <p className="text-slate-600 text-xs md:text-sm">lugares de predicación activa del evangelio</p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 md:p-10 shadow-md border border-slate-100">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Un Movimiento en el Mundo</h3>
                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  <p>Al menos una nueva iglesia abre sus puertas cada día para tocar a una comunidad local gracias a los esfuerzos de este movimiento.</p>
                  <p>La Iglesia es étnica y culturalmente diversa, siendo que el <span className="font-semibold text-slate-900">90% de sus miembros reside fuera de Norteamérica</span>. En la actualidad, la Iglesia está ministrando en <span className="font-semibold text-slate-900">133 países</span>, recibiendo más de <span className="font-semibold text-slate-900">1,400 nuevos miembros cada mes</span>.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="rounded-3xl bg-white p-6 md:p-10 shadow-md border border-slate-100">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Nuestra visión</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Reconciliar al mundo con Cristo por medio del poder del Espíritu Santo, con una iglesia sana y comprometida con la Gran Comisión.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                      <p className="text-xs uppercase tracking-wider text-cyan-600 font-bold">Impacto</p>
                      <p className="mt-1 text-slate-600 text-xs md:text-sm">Un movimiento que transforma familias y comunidades.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                      <p className="text-xs uppercase tracking-wider text-cyan-600 font-bold">Unidad</p>
                      <p className="mt-1 text-slate-600 text-xs md:text-sm">Una red de iglesias conectadas en propósito y amor.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64 lg:h-80">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                    alt="Visión compartida"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "mision" && (
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 md:p-10 shadow-md border border-slate-100">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Nuestra misión</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Exaltar a Cristo, procurar la santidad, ser llenos del Espíritu, abrirnos a todas las naciones, hacer discípulos, plantar iglesias y vivir la unión cristiana.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {misionPilares.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-linear-to-br from-white to-slate-50/50 border border-slate-200/60 p-5 shadow-xs hover:border-cyan-200 transition">
                    <p className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-500 shrink-0"></span>
                      {item.title}
                    </p>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Nosotros;