"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  Swords,
  Dumbbell,
  Trophy,
  Check,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";

const plans = [
  {
    id: "decouverte",
    icon: Swords,
    title: "D\u00c9COUVERTE",
    price: "15\u20ac",
    period: "/ S\u00e9ance",
    features: ["Acc\u00e8s s\u00e9ance unique", "Toutes disciplines", "Pr\u00eat de mat\u00e9riel"],
    highlighted: false,
    btnClass: "border-2 border-[#ac8884] text-texte",
  },
  {
    id: "mensuel",
    icon: Dumbbell,
    title: "MENSUEL",
    price: "65\u20ac",
    period: "/ Mois",
    features: [
      "Acc\u00e8s illimit\u00e9 6j/7",
      "Toutes disciplines",
      "Licence incluse",
      "Bilan mensuel",
    ],
    highlighted: true,
    btnClass: "bg-rouge text-texte",
  },
  {
    id: "annuel",
    icon: Trophy,
    title: "ANNUEL",
    price: "399\u20ac",
    period: "/ An",
    features: ["2 Mois offerts", "T-Shirt Club Offert", "Acc\u00e8s illimit\u00e9", "Bilan trimestriel"],
    highlighted: false,
    btnClass: "border-2 border-[#ac8884] text-texte",
  },
];

function InscriptionContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "mensuel";
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    dateNaissance: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (!form.nom || !form.prenom || !form.email) return;
    setLoading(true);
    try {
      // Send inscription email
      await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan: selectedPlan }),
      });

      // Create Stripe checkout
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlan,
          membre: form,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else if (data.redirect) {
        window.location.href = data.redirect;
      }
    } catch {
      console.error("Erreur checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-noir grainy-bg min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center md:text-left max-w-4xl">
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-none mb-4">
            REJOINS <span className="text-rouge">GARD COMBAT CLUB</span>
          </h1>
          <p className="font-sans text-muted uppercase tracking-widest border-l-4 border-rouge pl-4">
            L&apos;ar\u00e8ne vous attend. Commencez votre transformation aujourd&apos;hui.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* ETAPE 01 — FORMULE */}
          <div className="col-span-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-rouge text-texte w-12 h-12 flex items-center justify-center font-display text-2xl">
                01
              </div>
              <h2 className="font-display text-4xl uppercase tracking-wider">
                CHOISISSEZ VOTRE FORMULE
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPlan(p.id)}
                  className={`text-left p-8 flex flex-col justify-between transition group relative border-b-8 ${
                    selectedPlan === p.id
                      ? "border-rouge"
                      : "border-transparent hover:border-rouge"
                  } ${
                    p.highlighted
                      ? "bg-[#353534] border-l-4 border-l-rouge scale-105 z-10"
                      : "bg-[#201f1f] hover:bg-card-elevated"
                  }`}
                >
                  {p.highlighted && (
                    <span className="absolute -top-4 right-8 bg-rouge text-texte px-4 py-1 font-display text-sm tracking-widest uppercase">
                      RECOMMAND\u00c9
                    </span>
                  )}
                  <div>
                    <p.icon size={24} className="text-rouge mb-4" />
                    <h3 className="font-display text-3xl uppercase mb-2">{p.title}</h3>
                    <div className="font-display text-5xl mb-6">
                      {p.price}
                      <span className="font-sans text-lg text-muted ml-2">{p.period}</span>
                    </div>
                    <ul className="font-sans uppercase text-sm font-semibold tracking-wide text-muted space-y-4 mb-8">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Check size={12} /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`py-3 w-full font-display text-xl tracking-widest uppercase text-center hover:bg-texte hover:text-noir transition ${p.btnClass}`}
                  >
                    S\u00c9LECTIONNER
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ETAPE 02 — INFOS */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-rouge text-texte w-12 h-12 flex items-center justify-center font-display text-2xl">
                02
              </div>
              <h2 className="font-display text-4xl uppercase tracking-wider">
                INFORMATIONS PERSONNELLES
              </h2>
            </div>

            <div className="bg-[#1c1b1b] p-8 border-l-8 border-rouge">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted mb-2 block">
                    NOM
                  </label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    className="w-full bg-[#0e0e0e] border-b-2 border-[#5c403c] focus:border-rouge focus:ring-0 focus:outline-none text-texte p-4 uppercase font-sans tracking-wider placeholder:text-[#353534]"
                    placeholder="DUPONT"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted mb-2 block">
                    PR\u00c9NOM
                  </label>
                  <input
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    className="w-full bg-[#0e0e0e] border-b-2 border-[#5c403c] focus:border-rouge focus:ring-0 focus:outline-none text-texte p-4 uppercase font-sans tracking-wider placeholder:text-[#353534]"
                    placeholder="JEAN"
                  />
                </div>
              </div>
              <div className="space-y-8 mb-8">
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted mb-2 block">
                    EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[#0e0e0e] border-b-2 border-[#5c403c] focus:border-rouge focus:ring-0 focus:outline-none text-texte p-4 font-sans tracking-wider placeholder:text-[#353534]"
                    placeholder="jean@email.com"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted mb-2 block">
                    T\u00c9L\u00c9PHONE
                  </label>
                  <input
                    name="tel"
                    type="tel"
                    value={form.tel}
                    onChange={handleChange}
                    className="w-full bg-[#0e0e0e] border-b-2 border-[#5c403c] focus:border-rouge focus:ring-0 focus:outline-none text-texte p-4 uppercase font-sans tracking-wider placeholder:text-[#353534]"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted mb-2 block">
                    DATE DE NAISSANCE
                  </label>
                  <input
                    name="dateNaissance"
                    type="date"
                    value={form.dateNaissance}
                    onChange={handleChange}
                    className="w-full bg-[#0e0e0e] border-b-2 border-[#5c403c] focus:border-rouge focus:ring-0 focus:outline-none text-texte p-4 uppercase font-sans tracking-wider placeholder:text-[#353534]"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-[#5c403c] flex items-center justify-between gap-6 flex-wrap">
                <p className="font-sans text-xs text-muted uppercase tracking-wider max-w-[240px]">
                  Paiement 100% s\u00e9curis\u00e9 via STRIPE. Vos donn\u00e9es sont crypt\u00e9es.
                </p>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={loading}
                  className="bg-rouge text-texte px-12 py-4 font-display text-2xl tracking-[0.05em] uppercase hover:bg-texte hover:text-noir active:scale-95 transition disabled:opacity-50"
                >
                  {loading ? "CHARGEMENT..." : "PASSER AU PAIEMENT"}
                </button>
              </div>
            </div>
          </div>

          {/* ASIDE — POURQUOI NOUS */}
          <div className="lg:col-span-4">
            <div className="bg-rouge p-8 mb-6">
              <h3 className="font-display text-3xl text-texte mb-4">POURQUOI NOUS ?</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <ShieldCheck size={24} className="text-texte" />
                    <span className="text-texte text-sm font-bold uppercase">COACHS CERTIFI\u00c9S</span>
                  </div>
                  <p className="text-texte/80 text-xs mt-1">
                    Experts en MMA, Boxe, JJB et Muay Thai.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Zap size={24} className="text-texte" />
                    <span className="text-texte text-sm font-bold uppercase">\u00c9QUIPEMENT PRO</span>
                  </div>
                  <p className="text-texte/80 text-xs mt-1">
                    Sac de frappe, Octogone, Tatami haute densit\u00e9.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Users size={24} className="text-texte" />
                    <span className="text-texte text-sm font-bold uppercase">COMMUNAUT\u00c9</span>
                  </div>
                  <p className="text-texte/80 text-xs mt-1">
                    Plus qu&apos;un club, une famille soud\u00e9e.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden aspect-[4/3] group">
              <Image
                src="/images/salle-mma.png"
                alt="Salle Gard Combat Club"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-noir/80 to-transparent">
                <span className="font-display text-2xl text-texte tracking-widest uppercase">
                  TRAIN HARD OR STAY HOME
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense fallback={<div className="bg-noir min-h-screen" />}>
      <InscriptionContent />
    </Suspense>
  );
}
