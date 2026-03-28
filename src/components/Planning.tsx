"use client";

import { planning } from "@/data/planning";

const colorMap: Record<string, string> = {
  rouge: "bg-rouge/20 border-l-4 border-rouge",
  blue: "bg-blue-600/20 border-l-4 border-blue-600",
  green: "bg-green-600/20 border-l-4 border-green-600",
  orange: "bg-orange-600/20 border-l-4 border-orange-600",
  neutral: "bg-card-elevated",
};

export default function Planning() {
  return (
    <section id="planning" className="bg-[#1c1b1b] py-24 px-6">
      <div className="container mx-auto">
        <h2 className="font-display text-5xl uppercase tracking-tight mb-12">
          PLANNING DE LA SEMAINE
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-[#5c403c]">
                {planning.map((j) => (
                  <th
                    key={j.jour}
                    className="p-4 font-display text-xl tracking-widest text-rouge text-left"
                  >
                    {j.jour}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {planning.map((j) => (
                  <td key={j.jour} className="p-4 align-top">
                    {j.cours.map((c, i) => (
                      <div
                        key={i}
                        className={`${colorMap[c.color]} p-3 mb-3`}
                      >
                        <div className="font-display text-lg">{c.discipline}</div>
                        <div className="text-xs text-muted">{c.horaire}</div>
                        {c.niveau && (
                          <span className="bg-rouge text-texte text-[10px] px-1 mt-1 inline-block uppercase font-bold tracking-tighter">
                            {c.niveau}
                          </span>
                        )}
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
