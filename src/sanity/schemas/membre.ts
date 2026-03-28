const membreSchema = {
  name: "membre",
  title: "Membre",
  type: "document",
  fields: [
    { name: "prenom", title: "Pr\u00e9nom", type: "string" },
    { name: "nom", title: "Nom", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "telephone", title: "T\u00e9l\u00e9phone", type: "string" },
    { name: "dateNaissance", title: "Date de naissance", type: "date" },
    {
      name: "formule",
      title: "Formule",
      type: "string",
      options: { list: ["decouverte", "mensuel", "annuel"] },
    },
    { name: "dateInscription", title: "Date d\u2019inscription", type: "datetime" },
    { name: "actif", title: "Actif", type: "boolean", initialValue: true },
  ],
};
export default membreSchema;
