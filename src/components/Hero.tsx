import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[921px] w-full flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mma.png"
          alt="Gard Combat Club - MMA"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/70 to-transparent" />

      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none grain-overlay" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-5xl">
        <span className="inline-block bg-rouge text-texte px-3 py-1 text-xs tracking-[0.2em] mb-6 font-bold font-sans rounded-full">
          UZ&Egrave;S &middot; GARD &middot; DEPUIS 2014
        </span>

        <h1 className="font-display text-7xl md:text-9xl uppercase leading-none tracking-[0.05em] mb-2">
          FORGE TON <span className="text-rouge">MENTAL.</span>
        </h1>

        <h2 className="font-display text-3xl md:text-5xl text-rouge uppercase tracking-tight mb-6">
          Sculpte ton corps.
        </h2>

        <p className="font-sans text-muted text-lg md:text-xl max-w-xl mb-10 font-medium">
          MMA &middot; Boxe &middot; Grappling &middot; Muay Tha&iuml;.<br />
          Le club de r&eacute;f&eacute;rence &agrave; Uz&egrave;s pour tous les niveaux.
          Rejoignez l&apos;&eacute;lite du combat dans le Gard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/inscription"
            className="bg-rouge text-texte px-10 py-4 font-display text-2xl tracking-widest hover:bg-texte hover:text-noir transition active:scale-95 text-center"
          >
            REJOINDRE LE CLUB
          </Link>
          <a
            href="#planning"
            className="border-2 border-texte text-texte px-10 py-4 font-display text-2xl tracking-widest hover:bg-texte hover:text-noir transition active:scale-95 text-center"
          >
            VOIR LES COURS
          </a>
        </div>
      </div>
    </section>
  );
}
