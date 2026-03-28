const resultatSchema = {
  name: "resultat",
  title: "R\u00e9sultat",
  type: "document",
  fields: [
    { name: "combattant", title: "Combattant", type: "string" },
    { name: "competition", title: "Comp\u00e9tition", type: "string" },
    {
      name: "medaille",
      title: "M\u00e9daille",
      type: "string",
      options: { list: ["GOLD", "SILVER", "BRONZE"] },
    },
    { name: "date", title: "Date", type: "date" },
    { name: "discipline", title: "Discipline", type: "string" },
  ],
};
export default resultatSchema;
