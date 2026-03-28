"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "DISCIPLINES", href: "#disciplines" },
  { label: "LES COACHS", href: "#coachs" },
  { label: "RÉSULTATS", href: "#resultats" },
  { label: "TARIFS", href: "#tarifs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#131313] border-b-4 border-rouge">
      <div className="px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-2xl font-black uppercase tracking-tighter text-rouge">
          GARD COMBAT CLUB
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display tracking-[0.05em] text-base text-muted hover:text-texte transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/inscription"
            className="font-display text-lg tracking-wider bg-rouge text-texte px-6 py-2 hover:bg-texte hover:text-noir transition active:scale-95 inline-block"
          >
            S&apos;INSCRIRE
          </Link>
        </div>

        <button
          className="md:hidden text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#131313] border-t border-bordure px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display tracking-[0.05em] text-base text-muted hover:text-texte transition"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/inscription"
            onClick={() => setOpen(false)}
            className="font-display text-lg tracking-wider bg-rouge text-texte px-6 py-2 hover:bg-texte hover:text-noir transition active:scale-95 text-center"
          >
            S&apos;INSCRIRE
          </Link>
        </div>
      )}
    </nav>
  );
}
