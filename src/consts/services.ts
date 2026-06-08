export interface Service {
  title: string;
  time: string;
  description: string;
  accent?: string; // El signo ? significa que es opcional
}

export const services: Service[] = [
  {
    title: "Servicios de adoración",
    time: "Jueves, 19:30hrs",
    description: "Un espacio diseñado para profundizar en la Palabra de Dios para todas las edades.",
    accent: "border-cyan-500"
  },
  {
    title: "Oración y Doctrina",
    time: "Miércoles - 7:00 PM",
    description: "Fortaleciendo nuestra fe y comunión con el Espíritu Santo en unidad.",
    accent: "border-emerald-500"
  },
  {
    title: "Ministerios",
    time: "Viernes, 10:30 hrs",
    description: "Alabanza, oración y un mensaje que transformará tu vida y la de tu familia.",
    accent: "border-red-600"
  },
];