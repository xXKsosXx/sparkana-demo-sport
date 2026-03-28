import { Award } from "lucide-react";
import { resultats } from "@/data/resultats";

const medalStyles: Record<string, { icon: string; badge: string }> = {
  GOLD: { icon: "text-or", badge: "GOLD" },
  SILVER: { icon: "text-slate-400", badge: "SILVER" },
  BRONZE: { icon: "text-amber-700", badge: "BRONZE" },
};

export default function Resultats() {
  return (
    <section id="resultats" className="bg-[#0e0e0e] py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="font-display text-7xl uppercase leading-none">NOS CHAMPIONS</h2>
          <span className="font-headline text-rouge text-2xl tracking-[0.2em]">
            R\u00c9SULTATS COMP\u00c9TITION
          </span>
        </div>

        <div className="grid md:grid-cols-3 border-4 border-card-high">
          {resultats.map((r, i) => {
            const style = medalStyles[r.medaille];
            return (
              <div
                key={r.nom}
                className={`p-8 ${i < resultats.length - 1 ? "border-b-4 md:border-b-0 md:border-r-4 border-card-high" : ""}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <Award size={40} className={style.icon} />
                  <span className="text-xs font-bold bg-card-elevated px-2 py-1 uppercase tracking-tighter">
                    {style.badge}
                  </span>
                </div>
                <h3 className="font-display text-3xl mb-1 uppercase">{r.nom}</h3>
                <p className="font-sans text-sm text-muted uppercase mb-4 tracking-widest">
                  {r.competition}
                </p>
                <div className="h-1 w-12 bg-rouge" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
