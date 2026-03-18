import { useReveal } from "@/hooks/use-reveal";

const problems = [
  { icon: "🔴", title: "Antacids Suppress Symptoms", desc: "They mask the pain by neutralizing acid but never address why the acid is refluxing in the first place." },
  { icon: "😰", title: "Stress Weakens Digestion", desc: "The gut-brain axis is real. Chronic stress silently shuts down your digestive enzymes and gut lining." },
  { icon: "🔥", title: "Gut Lining Inflammation", desc: "Persistent inflammation makes your condition progressively worse, leading to food sensitivities and leaky gut." },
  { icon: "🥗", title: "Random Diets Don't Fix It", desc: "Without clinical structure, trendy diets create more metabolic confusion." },
];

export default function HiddenProblem() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-24 md:py-32 section-dark">
      <div className="container mx-auto">
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl md:text-5xl mb-6 text-foreground">Why Your Acidity & IBS Keeps Returning</h2>
          <p className="text-lg text-foreground/70">Most treatments only address surface-level symptoms, leaving the root cause untouched and your health in a cycle of dependency.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => {
            const { ref: cardRef, visible: cardVisible } = useReveal();
            return (
              <div
                key={i}
                ref={cardRef}
                className={`glass-card p-8 rounded-[32px] border-l-4 border-primary transition-all duration-700 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl mb-3 font-display text-foreground">{p.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
