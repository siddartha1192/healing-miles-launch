import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { num: 1, title: "Root Cause Analysis", desc: "Deep-dive into your gut history, triggers, and physiological patterns." },
  { num: 2, title: "Personalised Correction", desc: "Diet, lifestyle, and medical adjustments tailored to your unique biology." },
  { num: 3, title: "Structured Journey", desc: "Step-by-step guided program with professional follow-up support." },
];

export default function CorrectionModel() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto">
        <div ref={ref} className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">The Healing Miles Correction Model</h2>
          <p className="text-foreground/70">A 3-step structured approach that addresses the root cause.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
          {steps.map((s) => {
            const { ref: r, visible: v } = useReveal();
            return (
              <div key={s.num} ref={r} className={`relative z-10 text-center transition-all duration-700 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-display">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold mb-4 font-display text-foreground">{s.title}</h3>
                <p className="text-foreground/70 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
