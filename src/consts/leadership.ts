export const pastoralTeam = [
  {
    name: "Fernando Toro",
    role: "Pastor Principal • Maestría en Teología • Ministro Ordenado",
    description: "Con años de dedicación al servicio, el Pastor Fernando guía nuestra congregación con firmeza, amor y un compromiso inquebrantable con la enseñanza bíblica.",
    image: "src/assets/pastor_fernando_toro.webp",
    imagePosition: "object-[center_20%]"
  },
  {
    name: "Nelsy Saez Salinas",
    role: "Pastora / Líder de Alabanza • Licenciada en Teología • Ministra Ordenada",
    description: "Dedicada a crear espacios de adoración auténticos, coordina el equipo de alabanza con pasión para que toda la congregación se conecte con Dios a través del canto.",
    image: "src/assets/pastora_nelsy_saez_salinas.webp",
    imagePosition: "object-[center_20%]",
  }
];

// Ministerios con sus líderes detallados con imagen
// Nota: Martina Toro Saez lidera dos áreas (Jóvenes y Alabanza) — se marca con
// `dualRole` para que la UI lo indique en vez de leerse como tarjeta duplicada.
export const ministriesWithTeam = [
  {
    ministryName: "Ministerio de Niños",
    leader: {
      name: "Pamela Collao Olivares",
      role: "Líder Ministerio de Niños • Bachiller en Teología",
      description: "Responsable de formar a los más pequeños en el conocimiento y amor de Dios.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    ministryName: "Ministerio de Jóvenes",
    leader: {
      name: "Martina Toro Saez",
      role: "Líder Ministerio de Jóvenes y Alabanza",
      description: "Guía a los jóvenes en su crecimiento espiritual y discipulado.",
      image: "src/assets/martina_toro_saez.webp",
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
      image: "src/assets/pastor_fernando_toro.webp",
      imagePosition: "object-[center_20%]"
    }
  },
  {
    ministryName: "Ministerio de alabanzas",
    leader: {
      name: "Martina Toro Saez",
      role: "Líder Ministerio de Alabanza",
      description: "Dirige el equipo de alabanza, inspirando a la congregación a adorar a Dios con pasión y devoción.",
      image: "src/assets/martina_toro_saez.webp",
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
    image: "src/assets/catherine_suazo_vargas.webp"
  }
];

export const committees = [
  {
    title: "Comité de Finanzas",
    image: "/src/assets/comite_finanzas.webp",
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
    image: "/src/assets/comite_social.webp",
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
    role: "Aseo",
    name: "Irma Nuñez Zamorano",
    image: "src/assets/Irma_nunez_zambrano.webp",
    imagePosition: "object-[50%_18%]"
  },
  {
    role: "Fechas de Cumpleaños",
    name: "Irma Nuñez Zambrano",
    image: "src/assets/Irma_nunez_zambrano.webp",
    imagePosition: "object-[50%_18%]"
  },
  {
    role: "Misiones Mundiales y Nacionales",
    name: "Karina Saez Salinas",
    image: "src/assets/karina_saez_salinas.webp",
    imagePosition: "object-[50%_30%]"
  },
  {
    role: "Líder de Oración",
    name: "Jessica Betania Dilello",
    image: "src/assets/jessica_betania_dilello.webp",
    imagePosition: "object-[50%_30%]"
  }
];

// Usado por la navegación interna sticky en liderazgo.astro
export const sections = [
  { id: "pastoral", label: "Pastoral" },
  { id: "ministerios", label: "Ministerios" },
  { id: "administracion", label: "Administración" },
  { id: "comites", label: "Comités" },
  { id: "logistica", label: "Logística" }
];