import type { IBusinessHours } from "@interfaces/IBusinessHours"
import type { ISalonData } from "@interfaces/ISalonData"
import type { ITeamMembers } from "@interfaces/ITeamMember"

export const businessHours: IBusinessHours = {
  monday: "CONFIRMAR CON CLIENTE",
  tuesday: "10:00 - 19:00",
  wednesday: "10:00 - 19:00",
  thursday: "10:00 - 19:00",
  friday: "10:00 - 19:00",
  saturday: "10:00 - 19:00",
  sunday: "10:00 - 15:00"
}


export const salonData: ISalonData = {
  name: "AURA Beauty Salon",
  address: "Calle 70",
  city: "San Francisco",
  state: "Ciudad de Panamá",
  email: "CONFIRMAR CON CLIENTE",
  phone: "+507 6792-5695",
  facebook: "https://www.facebook.com/aurabeautysalonpa",
  instagram: "https://www.instagram.com/aura.salonpty",
  pinterest: "#",
  youtube: "#"
}


export const teamMembers: ITeamMembers = {
  hairStylist: {
    photo: "/images/about-images/team/team-1.webp",
    alt: "Estilista de AURA Beauty Salon",
    name: "CONFIRMAR CON CLIENTE",
    job: "Estilista de Cabello",
    description: "Especialista en cortes, coloración, balayage y morenas iluminadas. Su técnica y cuidado personal hacen de cada visita una experiencia única."
  },
  manicurist: {
    photo: "/images/about-images/team/team-2.webp",
    alt: "Especialista en uñas de AURA Beauty Salon",
    name: "CONFIRMAR CON CLIENTE",
    job: "Especialista en Uñas",
    description: "Domina el arte de la manicure, pedicure y rubber nails. Cada diseño es un reflejo de tu personalidad y estilo."
  },
  esthetician: {
    photo: "/images/about-images/team/team-3.webp",
    alt: "Especialista en pestañas de AURA Beauty Salon",
    name: "CONFIRMAR CON CLIENTE",
    job: "Especialista en Pestañas",
    description: "Transforma tu mirada con técnica y precisión. Servicios de lashes pensados para realzar tu belleza natural."
  },
  pedicurist: {
    photo: "/images/about-images/team/team-4.webp",
    alt: "Curly hair specialist de AURA Beauty Salon",
    name: "CONFIRMAR CON CLIENTE",
    job: "Curly Hair Specialist",
    description: "Apasionada del cuidado de rizos. Trabaja con técnicas especializadas para definir, hidratar y colorear el cabello rizado de forma natural y saludable."
  },
  masseuse: {
    photo: "/images/about-images/team/team-5.webp",
    alt: "Especialista en tratamientos capilares de AURA Beauty Salon",
    name: "CONFIRMAR CON CLIENTE",
    job: "Tratamientos Capilares",
    description: "Experta en hidratación, alisado y tratamientos regeneradores. Devuelve vida y brillo al cabello con los mejores productos del mercado."
  },
  makeupArtist: {
    photo: "/images/about-images/team/team-6.webp",
    alt: "Profesional de AURA Beauty Salon",
    name: "CONFIRMAR CON CLIENTE",
    job: "CONFIRMAR CON CLIENTE",
    description: "Profesional dedicada a brindar la mejor experiencia de cuidado y belleza personalizada en AURA Beauty Salon."
  }
}
