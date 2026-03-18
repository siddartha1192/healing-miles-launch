import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { number: "1 in 5", desc: "Adults globally suffer from clinically diagnosed IBS." },
  { number: "40%", desc: "Of people worldwide have a functional digestive disorder." },
  { number: "₹12,000 Cr+", desc: "Spent annually on antacids in India — most without lasting relief." },
  { number: "70%", desc: "Of your immunity is directly dependent on gut health." },
  { number: "80%", desc: "Of serotonin (happiness hormone) is produced in the gut." },
];

export default function GutStats() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <svg className="w-full max-w-4xl text-foreground" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20C55.8 20 20 55.8 20 100s35.8 80 80 80 80-35.8 80-80S144.2 20 100 20zm0 145c-35.8 0-65-29.2-65-65s29.2-65 65-65 65 29.2 65 65-29.2 65-65 65z" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">The Gut Health Crisis Is Real</h2>
          <p className="text-foreground/70">Digestive disorders are now one of the most under-addressed health epidemics.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {stats.map((s, i) => {
            const { ref: r, visible: v } = useReveal();
            return (
              <div key={i} ref={r} className={`transition-all duration-700 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-5xl lg:text-6xl font-display font-bold text-primary mb-3 tracking-tight">{s.number}</div>
                <p className="text-foreground/80">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
