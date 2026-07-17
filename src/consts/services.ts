export interface Service {
  title: string;
  time: string;
  description: string;
  accent?: string; // El signo ? significa que es opcional
}

export const services: Service[] = [
  {
    title: "Oración y Discipulado",
    time: "Jueves - 19:30 hrs",
    description: "Fortaleciendo nuestra fe y comunión con el Espíritu Santo en unidad.",
    accent: "border-emerald-500"
  },
  {
    title: "Ministerios",
    time: "Viernes, 18:00 hrs - 20:00 hrs",
    description: "Alabanza, oración y un mensaje que transformará tu vida y la de tu familia.",
    accent: "border-red-600"
  },
  {
    title: "Servicios de adoración",
    time: "Domingo, 10:30 hrs",
    description: "Un espacio diseñado para profundizar en la Palabra de Dios para todas las edades.",
    accent: "border-cyan-500"
  },
];