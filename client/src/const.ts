export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Coiffure Damien";

export const APP_LOGO = "/logo.svg";

// Salon information
export const SALON_INFO = {
  name: "Coiffure Damien",
  phone: "03 88 73 25 70",
  address: "153 Grand Rue, 67500 Haguenau",
  email: "contact@coiffuredamien.fr",
  hours: {
    monday: "09:00–18:30",
    tuesday: "09:00–18:30",
    wednesday: "09:00–18:30",
    thursday: "09:00–18:30",
    friday: "09:00–18:30",
    saturday: "08:00–17:00",
    sunday: "Fermé",
  },
  links: {
    planity: "https://www.planity.com/coiffure-damien-67500-haguenau",
    facebook: "https://www.facebook.com/coiffuredamien67/",
    instagram: "https://www.instagram.com/coiffuredamien/",
  },
};

export const ABOUT_TEXT = `Niché dans une rue commerçante, le salon de coiffure mixte Coiffure Damien à Haguenau vous promet un moment de détente et de beauté au top ! Coupes, couleurs, balayages, permanentes… Damien, véritable passionné, réalise chaque prestation avec précision et écoute.
Toujours attentif aux envies de ses clients, il propose un travail moderne, naturel et parfaitement adapté à chaque personne.

Femmes, hommes et enfants : chacun profite d'un service sur mesure.
Balayage, ombré hair, coupe tendance, permanente, brushing, couleurs sans ammoniaque… Damien maîtrise toutes les techniques avec professionnalisme.

Le salon accueille avec ou sans rendez-vous.
Étudiants : -20 % sur présentation de la carte étudiante.`;
