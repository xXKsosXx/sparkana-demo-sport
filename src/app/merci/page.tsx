"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

function MerciContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "";

  return (
    <div className="bg-noir min-h-screen flex items-center justify-center">
      <div className="bg-card border border-rouge/30 p-16 max-w-md text-center mx-4">
        <CheckCircle size={64} className="text-rouge mx-auto mb-8" strokeWidth={1} />
        <h1 className="font-display text-4xl uppercase text-texte mb-4">
          BIENVENUE AU CLUB !
        </h1>
        {plan && (
          <p className="font-sans text-xs text-muted uppercase tracking-widest mb-4">
            Formule : {plan}
          </p>
        )}
        <p className="font-sans text-sm text-muted leading-relaxed mt-4">
          Ta demande d&apos;inscription a été reçue. Tu vas recevoir un email de
          confirmation avec toutes les infos pratiques.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block border border-rouge text-rouge px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-rouge hover:text-texte transition"
        >
          ← RETOUR AU SITE
        </Link>
      </div>
    </div>
  );
}

export default function MerciPage() {
  return (
    <Suspense fallback={<div className="bg-noir min-h-screen" />}>
      <MerciContent />
    </Suspense>
  );
}
