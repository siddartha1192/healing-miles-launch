import { useState, useRef } from "react";
import { Pill, Brain, Flame, UtensilsCrossed } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const problems = [
  {
    icon: Pill,
    color: "from-red-500/20 to-red-600/5",
    accent: "#d4c7c7",
    iconColor: "#ef4444",
    title: "Antacids Suppress Symptoms",
    short: "They mask pain — never the cause.",
    bullets: [
      "Neutralize acid temporarily, leaving root cause untouched",
      "Long-term use causes rebound hyperacidity",
      "Deplete magnesium, B12 & calcium over time",
      "Create a cycle of dependency & worsening symptoms",
    ],
    stat: "73%",
    statLabel: "patients relapse within 6 months",
  },
  {
    icon: Brain,
    color: "from-amber-500/20 to-amber-600/5",
    accent: "#dad3c9",
    iconColor: "#a855f7",
    title: "Stress Destroys Digestion",
    short: "Your gut-brain axis is under attack.",
    bullets: [
      "Chronic stress halts digestive enzyme production",
      "Cortisol spikes inflame the gut lining directly",
      "Slows intestinal motility, causing bloating & IBS",
      "Disrupts microbiome balance within 48 hours",
    ],
    stat: "80%",
    statLabel: "of IBS cases are stress-triggered",
  },
  {
    icon: Flame,
    color: "from-orange-500/20 to-orange-600/5",
    accent: "#e4d7cd",
    iconColor: "#f97316",
    title: "Silent Gut Inflammation",
    short: "The fire you can't feel — until it's too late.",
    bullets: [
      "Persistent inflammation damages the mucosal barrier",
      "Leads to food sensitivities & leaky gut syndrome",
      "Triggers systemic inflammation (joints, skin, brain fog)",
      "Progresses silently for years before symptoms worsen",
    ],
    stat: "3×",
    statLabel: "higher risk of IBD if untreated",
  },
  {
    icon: UtensilsCrossed,
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "#c9ddd6",
    iconColor: "#eab308",
    title: "Random Diets Backfire",
    short: "Without structure, diets make things worse.",
    bullets: [
      "Trendy elimination diets cause nutritional deficiencies",
      "No personalisation means no lasting results",
      "Yo-yo eating disrupts gut flora diversity",
      "Creates metabolic confusion & hormonal imbalance",
    ],
    stat: "91%",
    statLabel: "of self-diets fail within 3 months",
  },
];

function ProblemCard({ p, i }: { p: (typeof problems)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        height: "300px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
        zIndex: hovered ? 100 : 1,
        isolation: "isolate",
      }}
    >
      <div
        onMouseEnter={() => { clearTimeout(leaveTimer.current); setHovered(true); }}
        onMouseLeave={() => { leaveTimer.current = setTimeout(() => setHovered(false), 120); }}
        className="absolute left-0 right-0 top-0 cursor-pointer"
        style={{
          borderRadius: "28px",
          background: "hsl(var(--card))",
          border: `1px solid ${hovered ? p.accent + "55" : "hsl(var(--border))"}`,
          height: hovered ? "auto" : "300px",
          zIndex: hovered ? 50 : 1,
          overflow: "hidden",
          boxShadow: hovered
            ? `0 40px 80px -20px ${p.accent}55, 0 12px 40px -8px rgba(0,0,0,0.4)`
            : "0 2px 16px -4px rgba(0,0,0,0.18)",
          transform: hovered
            ? "perspective(1000px) rotateX(-3deg) translateY(-12px) translateZ(30px) scale(1.04)"
            : "perspective(1000px) rotateX(0deg) translateY(0) translateZ(0) scale(1)",
          transformOrigin: "top center",
          transition: "height 0.45s cubic-bezier(0.34,1.1,0.64,1), transform 0.45s cubic-bezier(0.34,1.1,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease",
        }}
      >
        {/* Full-bleed icon zone — top 55% of card */}
        <div
          className="relative flex items-center justify-center"
          style={{
            height: "165px",
            background: `radial-gradient(ellipse at 60% 40%, ${p.accent}30 0%, ${p.accent}10 50%, transparent 75%)`,
            borderBottom: `1px solid ${p.accent}22`,
          }}
        >
          {/* Watermark */}
          <p.icon
            className="absolute pointer-events-none"
            style={{
              width: "110px", height: "110px",
              opacity: 0.05,
              bottom: "-18px", right: "-10px",
              transform: hovered ? "scale(1.1) rotate(8deg)" : "scale(1) rotate(0deg)",
              transition: "transform 0.6s ease",
              color: "hsl(var(--foreground))",
            }}
            strokeWidth={1}
          />

          {/* Main icon */}
          <p.icon
            style={{
              width: "52px", height: "52px",
              color: hovered ? p.iconColor : p.iconColor + "99",
              transform: hovered ? "scale(1.12) translateY(-4px)" : "scale(1) translateY(0)",
              transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), color 0.3s ease",
              position: "relative",
              zIndex: 1,
            }}
            strokeWidth={1.5}
          />

          {/* Stat badge — top right */}
          <div
            className="absolute top-4 right-4 text-right"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? "translateY(-6px) scale(0.9)" : "translateY(0) scale(1)",
              transition: "all 0.25s ease",
            }}
          >
            <div className="text-2xl font-black leading-none text-foreground">{p.stat}</div>
            <div className="text-[9px] text-foreground/45 max-w-[72px] leading-tight mt-0.5">{p.statLabel}</div>
          </div>
        </div>

        {/* Text zone */}
        <div className="px-5 pt-4 pb-5">
          <h3 className="text-xl font-display font-bold text-primary leading-snug mb-1">{p.title}</h3>
          <p
            className="text-sm text-foreground/55 leading-relaxed"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? "translateY(-4px)" : "translateY(0)",
              transition: "all 0.25s ease",
            }}
          >
            {p.short}
          </p>

          {/* Bullets on hover */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: hovered ? "400px" : "0px",
              opacity: hovered ? 1 : 0,
              marginTop: hovered ? "10px" : "0px",
              transition: "max-height 0.45s ease, opacity 0.3s ease, margin-top 0.3s ease",
            }}
          >
            <ul className="space-y-2">
              {p.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                  style={{
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.3s ease ${bi * 70}ms, transform 0.3s ease ${bi * 70}ms`,
                  }}
                >
                  <span
                    className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full"
                    style={{ background: p.accent }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom sweep bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "3px",
            width: hovered ? "100%" : "0%",
            background: `linear-gradient(to right, ${p.accent}, ${p.accent}33)`,
            transition: "width 0.55s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function HiddenProblem() {
  const { ref, visible } = useReveal();

  return (
    <section className="pt-24 md:pt-32 pb-48 md:pb-64 section-dark relative overflow-hidden">
      {/* Dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)/0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      {/* Soft primary glow — top center only */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "hsl(var(--primary)/0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary)/0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
            The Root Cause Problem
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Why Your Acidity & IBS<br />
            <span className="text-primary italic">Keeps Coming Back</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Most treatments only scratch the surface. Hover each card to understand what's really happening inside your gut.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ position: "relative", zIndex: 0 }}>
          {problems.map((p, i) => (
            <ProblemCard key={i} p={p} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
