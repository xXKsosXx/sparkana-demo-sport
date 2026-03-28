const coachSchema = {
  name: "coach",
  title: "Coach",
  type: "document",
  fields: [
    { name: "nom", title: "Nom", type: "string" },
    { name: "role", title: "R\u00f4le", type: "string" },
    { name: "experience", title: "Exp\u00e9rience", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "ordre", title: "Ordre", type: "number" },
  ],
};
export default coachSchema;
