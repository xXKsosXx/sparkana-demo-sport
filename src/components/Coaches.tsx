import Image from "next/image";
import { coaches } from "@/data/coaches";

export default function Coaches() {
  return (
    <section id="coachs" className="bg-[#131313] py-24 px-6">
      <div className="container mx-auto">
        <h2 className="font-display text-6xl mb-16 uppercase text-center">LES COACHS</h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {coaches.map((c) => (
            <div key={c.nom} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={`/images/${c.image}`}
                  alt={`${c.nom} - ${c.role}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-noir to-transparent">
                  <h3 className="font-display text-3xl">{c.nom}</h3>
                  <p className="text-rouge text-xs font-bold tracking-widest uppercase">
                    {c.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
