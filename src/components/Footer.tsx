import { Share2, Video } from "lucide-react";

const footerLinks = [
  "DISCIPLINES",
  "LES COACHS",
  "R\u00c9SULTATS",
  "TARIFS",
  "CONTACT",
  "MENTIONS L\u00c9GALES",
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] border-t-4 border-rouge">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 px-12 py-16">
        {/* Col 1 */}
        <div className="max-w-sm flex flex-col gap-6">
          <span className="font-display text-xl font-black text-rouge uppercase tracking-tighter">
            GARD COMBAT CLUB
          </span>
          <p className="font-sans text-xs text-muted tracking-widest leading-loose">
            Route de N\u00eemes, 30700 Uz\u00e8s, Gard.<br />
            Forgez votre corps et votre esprit dans le temple du combat.<br />
            Contact: contact@gardcombatclub.fr
          </p>
        </div>

        {/* Col 2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
          {footerLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="font-sans text-muted uppercase text-xs tracking-widest hover:text-texte transition"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4 items-end">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-rouge flex items-center justify-center hover:bg-rouge transition group"
            >
              <Share2 size={16} className="text-rouge group-hover:text-texte" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-rouge flex items-center justify-center hover:bg-rouge transition group"
            >
              <Video size={16} className="text-rouge group-hover:text-texte" />
            </a>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted/50">
            \u00a9 2025 GARD COMBAT CLUB. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
