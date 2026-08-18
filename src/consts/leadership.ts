// 1. Importa todas tus imágenes locales estáticamente
import pastorFernandoToro from "../assets/people/pastor_fernando_toro.webp";
import pastoraNelsySaez from "../assets/people/pastora_nelsy_saez_salinas.webp";
import martinaToroSaez from "../assets/people/martina_toro_saez.webp";
import catherineSuazo from "../assets/people/catherine_suazo_vargas.webp";
import comiteFinanzas from "../assets/people/comite_finanzas.webp";
import comiteSocial from "../assets/people/comite_social.webp";
import irmaNunez from "../assets/people/Irma_nunez_zambrano.webp";
import karinaSaez from "../assets/people/karina_saez_salinas.webp";
import jessicaDilello from "../assets/people/jessica_betania_dilello.webp";
import pamelaCollao from "../assets/people/pamela_collao_olivares.webp";


export const pastoralTeam = [
  {
    name: "Fernando Toro",
    role: "Pastor Principal • Maestría en Teología • Ministro Ordenado",
    description: "Con 11 años de estudios en Teología y habiendo egresado recientemente de su Maestría, el Pastor Fernando guía nuestra congregación con firmeza, amor y un compromiso inquebrantable con la enseñanza bíblica.",
    image: pastorFernandoToro,
    imagePosition: "object-[center_20%]"
  },
  {
    name: "Nelsy Saez Salinas",
    role: "Pastora • Licenciada en Teología • Ministra Ordenada",
    description: "Dedicada a guiar y formar a los hermanos en la Palabra, la Pastora Nelsy camina junto a la congregación con firmeza y amor, tal como lo hace nuestro Pastor Fernando.",
    image: pastoraNelsySaez,
    imagePosition: "object-[center_20%]",
  }
];

export const ministriesWithTeam = [
  {
    ministryName: "Ministerio de Niños",
    leader: {
      name: "Pamela Collao Olivares",
      role: "Líder Ministerio de Niños • Bachiller en Teología",
      description: "Responsable de formar a los más pequeños en el conocimiento y amor de Dios.",
      imagePosition: "object-[center_40%]",
      image: pamelaCollao
    }
  },
  {
    ministryName: "Ministerio de Jóvenes",
    leader: {
      name: "Martina Toro Saez",
      role: "Líder Ministerio de Jóvenes y Alabanza",
      description: "Guía a los jóvenes en su crecimiento espiritual y discipulado.",
      image: martinaToroSaez,
      imagePosition: "object-[center_20%]",
      dualRole: true
    }
  },
  {
    ministryName: "Ministerio de Varones",
    leader: {
      name: "Fernando Toro Larenas",
      role: "Líder Ministerio de Varones",
      description: "Fortalece a los hombres para ser líderes según el corazón de Dios.",
      image: pastorFernandoToro,
      imagePosition: "object-[center_20%]"
    }
  },
  {
    ministryName: "Ministerio de alabanzas",
    leader: {
      name: "Martina Toro Saez",
      role: "Líder Ministerio de Alabanza",
      description: "Dirige el equipo de alabanza, inspirando a la congregación a adorar a Dios con pasión y devoción.",
      image: martinaToroSaez,
      imagePosition: "object-[center_20%]",
      dualRole: true
    }
  },
  {
    ministryName: "Ministerio de Damas",
    leader: {
      name: "Nelsy Saez Salinas",
      role: "Líder Ministerio de Damas",
      description: "Fomenta la unidad y el crecimiento espiritual entre las mujeres de la congregación.",
      image: pastoraNelsySaez,
      imagePosition: "object-[center_20%]",
      dualRole: true
    }
  }
];

export const adminTeam = [
  {
    name: "Catherine Suazo Vargas",
    role: "Secretaria de la Iglesia • Cursando Bachillerato en Teología",
    description: "Gestiona la administración y documentación oficial de la congregación.",
    image: catherineSuazo
  }
];

export const committees = [
  {
    title: "Comité de Finanzas",
    image: comiteFinanzas,
    imagePosition: "object-top",
    members: [
      { role: "Director", name: "Jaime Reinoso Collao" },
      { role: "Subdirector", name: "Fernando Toro Larenas" },
      { role: "Tesorero", name: "Reliquia Herbas Montano" },
      { role: "Secretaria", name: "Pamela Collao Olivares" },
      { role: "Miembro de Directorio", name: "Nelsy Saez Salinas" },
      { role: "Miembro de Directorio", name: "Sergio Garrido Manque" }
    ]
  },
  {
    title: "Comité de Sociales",
    image: comiteSocial,
    members: [
      { role: "Miembro", name: "Jessica Betania Dilello" },
      { role: "Miembro", name: "Karina Saez Salinas" },
      { role: "Miembro", name: "Reliquia Herbas Montano" },
      { role: "Miembro", name: "Irma Nuñez Zambrano" }
    ]
  }
];

export const logistics = [
  {
    role: "Aseo y Fechas de Cumpleaños",
    name: "Irma Nuñez Zambrano",
    image: irmaNunez,
    imagePosition: "object-[50%_18%]"
  },
  {
    role: "Misiones Mundiales y Nacionales",
    name: "Karina Saez Salinas",
    image: karinaSaez,
    imagePosition: "object-[50%_30%]"
  },
  {
    role: "Líder de Oración",
    name: "Jessica Betania Dilello",
    image: jessicaDilello,
    imagePosition: "object-[50%_30%]"
  },
  {
    role: "Fechas Relevantes",
    name: "Pamela Collao Olivares",
    image: pamelaCollao,
    imagePosition: "object-[center_40%]"
  }
];

export const sections = [
  { id: "pastoral", label: "Pastoral" },
  { id: "ministerios", label: "Ministerios" },
  { id: "administracion", label: "Administración" },
  { id: "comites", label: "Comités" },
  { id: "Apeople/reas de Apoyo y Servicio", label: "Áreas de Apoyo y Servicio" }
];