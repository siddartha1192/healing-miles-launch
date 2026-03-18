import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";
import { Flame, RefreshCcw, Pill, Brain, HelpCircle, ClipboardList } from "lucide-react";

const symptoms = [
  { icon: Flame,          color: "#f97316", label: "Chronic acidity, gas, or bloating for months or years" },
  { icon: RefreshCcw,     color: "#3b82f6", label: "Tried multiple doctors with no lasting relief" },
  { icon: Pill,           color: "#ef4444", label: "Dependent on antacids or daily PPIs" },
  { icon: Brain,          color: "#a855f7", label: "Stress that wrecks your digestion every time" },
  { icon: HelpCircle,     color: "#f59e0b", label: "Confused by contradictory diet advice online" },
  { icon: ClipboardList,  color: "#10b981", label: "Ready for a structured, medical root-cause approach" },
];

function ctaMessage(count: number) {
  if (count === 0) return "Tap the symptoms that sound like you.";
  if (count === 1) return "That's already a signal. Don't ignore it.";
  if (count <= 3) return `You checked ${count} — that's not normal. You deserve answers.`;
  return `${count} out of 6 — your gut is asking for help. Let's fix it.`;
}

export default function IsThisForYou() {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  const count = checked.size;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* background accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* heading */}
        <div
          ref={ref}
          className={`text-center mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            Symptom Check
          </span>
          <h2 className="text-3xl md:text-5xl text-foreground mb-3">Is This For You?</h2>
          <p className="text-foreground/60 text-base md:text-lg max-w-xl mx-auto">
            Tap every symptom that sounds like your life right now.
          </p>
        </div>

        {/* live counter bar */}
        <div
          className={`flex items-center justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex gap-1.5">
            {symptoms.map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-8 rounded-full transition-all duration-300"
                style={{ background: checked.has(i) ? "hsl(var(--primary))" : "hsl(var(--border))" }}
              />
            ))}
          </div>
          <span className="text-sm text-foreground/50 tabular">
            {count}/{symptoms.length}
          </span>
        </div>

        {/* symptom cards grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {symptoms.map((s, i) => {
            const active = checked.has(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`group w-full text-left flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none
                  ${active
                    ? "border-primary bg-primary/8 shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_6px_24px_hsl(var(--primary)/0.12)] translate-y-0"
                    : "glass-card border-transparent hover:-translate-y-1"
                  }`}
                style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
              >
                {/* checkbox circle */}
                <div
                  className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                    ${active ? "border-primary bg-primary scale-110" : "border-foreground/20 group-hover:border-primary/50"}`}
                >
                  {active && (
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </div>

                {/* icon */}
                <s.icon
                  className="shrink-0 w-5 h-5 transition-all duration-200"
                  strokeWidth={1.75}
                  style={{ color: active ? s.color : s.color + "66", transform: active ? "scale(1.15)" : "scale(1)" }}
                />

                {/* label */}
                <span
                  className={`text-sm md:text-base transition-colors duration-200 ${active ? "text-foreground font-medium" : "text-foreground/75"}`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* dynamic CTA */}
        <div
          className={`text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p
            key={count}
            className="text-lg md:text-xl font-semibold text-foreground/80 mb-6 transition-all duration-300 animate-[fade-up_0.35s_ease_forwards]"
          >
            {ctaMessage(count)}
          </p>

          <button
            onClick={() => { navigate("/consultation"); window.scrollTo({ top: 0 }); }}
            className={`btn-primary text-base px-8 py-3.5 transition-all duration-300 ${count >= 2 ? "scale-105 shadow-[0_8px_32px_hsl(var(--primary)/0.35)]" : ""}`}
          >
            {count >= 2 ? "Yes — Book My Consultation →" : "Book Your Consultation"}
          </button>

          {count >= 2 && (
            <p className="mt-3 text-xs text-foreground/40 animate-[fade-up_0.4s_ease_forwards]">
              One-time ₹799 · 45-min deep dive with Dr. Aman
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
