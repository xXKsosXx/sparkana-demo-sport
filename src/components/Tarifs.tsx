import Link from "next/link";

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-[#131313] py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl uppercase mb-4">REJOINS L&apos;ÉQUIPE</h2>
          <div className="w-24 h-1 bg-rouge mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* DECOUVERTE */}
          <div className="bg-[#201f1f] p-10 border-t-4 border-[#5c403c] flex flex-col items-center">
            <h3 className="font-display text-2xl mb-2">DÉCOUVERTE</h3>
            <div className="font-display text-5xl mb-8">GRATUIT</div>
            <ul className="text-muted space-y-4 mb-10 text-sm text-center">
              <li>1 Séance d&apos;essai offerte</li>
              <li>Accès tous cours</li>
              <li>Prêt de matériel</li>
            </ul>
            <Link
              href="/inscription?plan=decouverte"
              className="border-2 border-[#ac8884] text-texte py-4 w-full font-display tracking-widest hover:bg-texte hover:text-noir transition text-center block"
            >
              ESSAYER
            </Link>
          </div>

          {/* ANNUEL — highlighted */}
          <div className="bg-card-high p-10 border-4 border-rouge shadow-[0_0_40px_rgba(220,38,38,0.15)] flex flex-col items-center scale-105 z-10">
            <h3 className="font-display text-2xl mb-2 text-rouge">ANNUEL</h3>
            <div className="font-display text-5xl mb-2">399€</div>
            <p className="font-sans text-xs text-muted uppercase tracking-widest mb-8">
              SOIT 33€ / MOIS
            </p>
            <ul className="font-bold space-y-4 mb-10 text-sm text-center">
              <li className="text-texte">Accès illimité 6j/7</li>
              <li className="text-muted">Toutes disciplines incluses</li>
              <li className="text-muted">T-Shirt Club Offert</li>
              <li className="text-muted">Bilan trimestriel</li>
            </ul>
            <Link
              href="/inscription?plan=annuel"
              className="bg-rouge text-texte py-4 w-full font-display tracking-widest hover:bg-texte hover:text-noir transition shadow-lg text-center block"
            >
              S&apos;ENGAGER
            </Link>
          </div>

          {/* MENSUEL */}
          <div className="bg-[#201f1f] p-10 border-t-4 border-[#5c403c] flex flex-col items-center">
            <h3 className="font-display text-2xl mb-2">MENSUEL</h3>
            <div className="font-display text-5xl mb-8">49€</div>
            <ul className="text-muted space-y-4 mb-10 text-sm text-center">
              <li>Sans engagement</li>
              <li>Accès illimité</li>
              <li>Licence non incluse</li>
            </ul>
            <Link
              href="/inscription?plan=mensuel"
              className="border-2 border-[#ac8884] text-texte py-4 w-full font-display tracking-widest hover:bg-texte hover:text-noir transition text-center block"
            >
              SOUSCRIRE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
