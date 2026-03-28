import { Swords, Hand, Zap, Shield } from "lucide-react";

const disciplines = [
  {
    icon: Swords,
    title: "MMA",
    desc: "Le m\u00e9lange ultime des arts martiaux. Lutte, frappes et soumissions pour une polyvalence totale.",
  },
  {
    icon: Hand,
    title: "BOXE ANGLAISE",
    desc: "Le noble art. Travail de jambes, pr\u00e9cision des poings et cardio explosif.",
  },
  {
    icon: Zap,
    title: "MUAY THA\u00cf",
    desc: "L\u2019art des 8 membres. Utilisez vos coudes, genoux, tibias et poings avec puissance.",
  },
  {
    icon: Shield,
    title: "GRAPPLING",
    desc: "Ma\u00eetrise au sol sans kimono. Techniques de contr\u00f4le, de projection et de soumission.",
  },
];

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-[#131313] py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-16">
          <p className="font-headline text-xl tracking-widest uppercase text-rouge mb-2">
            NOS DISCIPLINES
          </p>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-tight text-texte">
            COMBATS. FORCE. TECHNIQUE.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {disciplines.map((d) => (
            <div
              key={d.title}
              className="kinetic-card group bg-[#201f1f] p-8 transition-all duration-200 hover:border-l-4 hover:border-rouge hover:bg-card-elevated"
            >
              <d.icon size={40} className="text-rouge mb-6" />
              <h3 className="font-display text-3xl mb-4 group-hover:translate-x-1 transition-transform">
                {d.title}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
