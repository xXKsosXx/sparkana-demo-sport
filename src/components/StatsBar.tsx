const stats = [
  { value: "120+", label: "MEMBRES ACTIFS" },
  { value: "4", label: "DISCIPLINES" },
  { value: "10", label: "COACHES EXPERTS" },
  { value: "2014", label: "FONDÉ À UZÈS" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#141414] py-12 border-y-4 border-rouge">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl text-rouge">{s.value}</div>
            <div className="font-sans text-xs uppercase tracking-widest text-muted mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
