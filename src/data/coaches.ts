export interface Coach {
  nom: string;
  role: string;
  experience: string;
  description: string;
  image: string;
}

export const coaches: Coach[] = [
  {
    nom: "KEVIN R.",
    role: "HEAD COACH - MMA",
    experience: "12 ans · Ex-pro IMMAF",
    description: "Champion régional MMA 2018-2020.",
    image: "coach-1.png",
  },
  {
    nom: "SARAH L.",
    role: "COACH BOXE & CARDIO",
    experience: "10 ans · Championne régionale",
    description: "Spécialiste cardio-combat et technique.",
    image: "coach-2.png",
  },
  {
    nom: "THOMAS M.",
    role: "COACH LUTTE & GRAPPLING",
    experience: "8 ans · Ceinture marron BJJ",
    description: "Approche analytique du sol.",
    image: "coach-3.png",
  },
];
