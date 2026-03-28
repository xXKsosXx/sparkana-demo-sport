import { Quote } from "lucide-react";

const temoignages = [
  {
    citation:
      "Une ambiance exceptionnelle et des coaches qui poussent au-delà de ses limites. On apprend autant sur le combat que sur soi-même.",
    nom: "MARC A.",
    role: "MEMBRE DEPUIS 3 ANS",
  },
  {
    citation:
      "Le meilleur club du Gard pour le Grappling. La technique est mise en avant avant tout. Idéal pour progresser sainement.",
    nom: "JULIE B.",
    role: "CEINTURE BLEUE",
  },
  {
    citation:
      "J'ai commencé sans aucune base. Aujourd'hui, je me sens plus fort, plus serein et j'ai une discipline que je n'avais jamais eue.",
    nom: "ANTOINE P.",
    role: "SECTION BOXE",
  },
];

export default function Temoignages() {
  return (
    <section className="bg-[#1c1b1b] py-24 px-6">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl mb-16 uppercase text-center tracking-widest">
          ILS SE SONT FORGÉS ICI
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {temoignages.map((t) => (
            <div key={t.nom} className="bg-[#201f1f] p-8 relative">
              <Quote size={48} className="absolute top-4 right-4 text-rouge/20" />
              <p className="font-sans italic text-muted mb-6 relative z-10">
                &ldquo;{t.citation}&rdquo;
              </p>
              <p className="font-sans font-bold text-sm uppercase tracking-widest">
                {t.nom} <span className="text-rouge ml-2">{t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
