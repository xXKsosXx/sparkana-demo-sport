export interface Cours {
  discipline: string;
  horaire: string;
  niveau?: string;
  color: "rouge" | "blue" | "orange" | "green" | "neutral";
}

export interface JourPlanning {
  jour: string;
  cours: Cours[];
}

export const planning: JourPlanning[] = [
  {
    jour: "LUNDI",
    cours: [
      { discipline: "MMA", horaire: "18:30 - 20:00", niveau: "DEBUTANTS", color: "rouge" },
    ],
  },
  {
    jour: "MARDI",
    cours: [
      { discipline: "BOXE ANGLAISE", horaire: "19:00 - 20:30", color: "blue" },
    ],
  },
  {
    jour: "MERCREDI",
    cours: [
      { discipline: "GRAPPLING", horaire: "18:30 - 20:00", niveau: "DEBUTANTS", color: "green" },
    ],
  },
  {
    jour: "JEUDI",
    cours: [
      { discipline: "MUAY THAI", horaire: "18:30 - 20:00", color: "orange" },
    ],
  },
  {
    jour: "VENDREDI",
    cours: [
      { discipline: "MMA SPARRING", horaire: "19:00 - 21:00", color: "rouge" },
    ],
  },
  {
    jour: "SAMEDI",
    cours: [
      { discipline: "OPEN MAT", horaire: "10:00 - 12:00", color: "neutral" },
    ],
  },
];
