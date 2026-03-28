const coursSchema = {
  name: "cours",
  title: "Cours",
  type: "document",
  fields: [
    { name: "discipline", title: "Discipline", type: "string" },
    {
      name: "jour",
      title: "Jour",
      type: "string",
      options: {
        list: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      },
    },
    { name: "heureDebut", title: "Heure de d\u00e9but", type: "string" },
    { name: "heureFin", title: "Heure de fin", type: "string" },
    { name: "niveau", title: "Niveau", type: "string" },
    {
      name: "coach",
      title: "Coach",
      type: "reference",
      to: [{ type: "coach" }],
    },
  ],
};
export default coursSchema;
