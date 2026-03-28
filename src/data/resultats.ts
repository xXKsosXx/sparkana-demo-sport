export interface Resultat {
  nom: string;
  competition: string;
  medaille: "GOLD" | "SILVER" | "BRONZE";
}

export const resultats: Resultat[] = [
  {
    nom: "M. DURAND",
    competition: "Championnat du Gard MMA",
    medaille: "GOLD",
  },
  {
    nom: "J. MARTIN",
    competition: "Open de France Grappling",
    medaille: "SILVER",
  },
  {
    nom: "S. BERNARD",
    competition: "Interclubs Boxe Anglaise",
    medaille: "BRONZE",
  },
];
