import { useReveal } from "@/hooks/use-reveal";
import { useEffect, useRef, useState } from "react";

const agenda = [
  {
    num: "01",
    title: "Why Acidity Keeps Returning",
    desc: "The hidden cycle behind medication dependency — why antacids provide temporary relief but never fix the root cause, and the exact pattern that keeps you trapped.",
    outcome: "Understand the true root cause of recurring acidity",
  },
  {
    num: "02",
    title: "The Gut–Stress Connection",
    desc: "How chronic stress silently destroys digestion through the vagus nerve — and a simple 10-minute daily practice that can begin reversing the damage starting tonight.",
    outcome: "Learn to calm your nervous system for better digestion",
  },
  {
    num: "03",
    title: "Why Common Solutions Fail",
    desc: "The hard truth about antacids, random probiotics, and restrictive diets — why most popular advice makes things worse, and what clinical data actually shows works.",
    outcome: "Stop wasting money on solutions that don't address the cause",
  },
  {
    num: "04",
    title: "The Healing Miles Model",
    desc: "The exact 4-step framework Dr. Aman Deep Rana has refined over 15 years — a structured, science-backed protocol you can start applying from day one.",
    outcome: "Walk away with a clear, proven action plan you can start today",
  },
];

const benefits = [
  {
    icon: "🎯",
    title: "Clarity on Your Root Cause",
    desc: "Finally understand WHY your gut issues keep recurring — the actual biological and lifestyle triggers unique to your situation.",
  },
  {
    icon: "📋",
    title: "Personalised Gut Insights",
    desc: "Discover which gut-stress pattern you fall into and what specific changes will make the biggest, fastest difference for your body.",
  },
  {
    icon: "🛠️",
    title: "A Ready-to-Use Framework",
    desc: "Leave with Dr. Rana's complete 4-step Healing Miles Model — a practical roadmap with daily actions you can start the very next morning.",
  },
  {
    icon: "💊",
    title: "A Path to Medication Freedom",
    desc: "Understand how to gradually and safely reduce dependency on antacids using a medically guided, natural approach without risky cold-turkey stops.",
  },
  {
    icon: "🧘",
    title: "Mind-Gut Reset Protocol",
    desc: "A proven 10-minute daily practice that repairs the gut-brain axis and measurably reduces stress-induced bloating within 2–3 weeks.",
  },
  {
    icon: "🤝",
    title: "Live Q&A with Dr. Rana",
    desc: "Get your specific questions answered live — rare, direct access to an expert with 15+ years of clinical experience and 5,000+ patients helped.",
  },
];

const transformations = [
  { before: "Confused about why nothing works", after: "Clear roadmap to lasting gut healing" },
  { before: "Dependent on antacids every day", after: "Tools to reduce medication naturally" },
  { before: "Bloated and exhausted after meals", after: "Simple meal & lifestyle protocols" },
  { before: "Stressed and anxious about eating", after: "Mind-gut reset you can try tonight" },
  { before: "Treating symptoms, not the cause", after: "Root cause framework for real change" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    result: "3 months acid-free",
    quote: "This webinar completely changed how I understood my gut. I've been off antacids for 3 months. The vagus nerve explanation was the missing piece I never knew about.",
  },
  {
    name: "Rahul Verma",
    location: "Bangalore",
    result: "Lost 8 kg in 60 days",
    quote: "I had no idea stress was the main driver of my bloating. After applying the Healing Miles Model, my digestion improved within 2 weeks. Wish I'd found this years ago.",
  },
  {
    name: "Sunita Patel",
    location: "Delhi",
    result: "No more PPI dependency",
    quote: "Dr. Aman Deep Rana's framework gave me something no doctor had before — a WHY. Once I understood it, the path to healing became obvious and achievable.",
  },
];

const included = [
  "45-min live session with Dr. Aman Deep Rana",
  "Gut Health Self-Assessment PDF (free)",
  "Live Q&A — ask your questions directly",
  "Recording link available for 48 hours",
  "Exclusive ₹300 off on first consultation",
];

// ── Animated Section with multiple entrance variants ──────────────────────────
type AnimVariant = "up" | "left" | "right" | "scale" | "tilt";

function AnimatedSection({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: AnimVariant;
}) {
  const { ref, visible } = useReveal();

  // For tilt we drive everything via inline style so perspective works correctly
  if (variant === "tilt") {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          transitionDelay: `${delay}ms`,
          opacity: visible ? 1 : 0,
          transform: visible
            ? "perspective(900px) rotateX(0deg) translateY(0px)"
            : "perspective(900px) rotateX(14deg) translateY(32px)",
          transition: "transform 0.85s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.65s ease",
        }}
      >
        {children}
      </div>
    );
  }

  const hidden: Record<Exclude<AnimVariant, "tilt">, string> = {
    up:    "opacity-0 translate-y-10",
    left:  "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    scale: "opacity-0 scale-90",
  };
  const shown: Record<Exclude<AnimVariant, "tilt">, string> = {
    up:    "opacity-100 translate-y-0",
    left:  "opacity-100 translate-x-0",
    right: "opacity-100 translate-x-0",
    scale: "opacity-100 scale-100",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? shown[variant] : hidden[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function WebinarSection() {
  const [scrollY, setScrollY] = useState(0);
  const [seatsLeft, setSeatsLeft] = useState(100);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSeatsLeft(73), 1800);
    return () => clearTimeout(t);
  }, []);

  const seatsFilled = 100 - seatsLeft;

  return (
    <div id="webinar" className="bg-background min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/60 py-20 md:py-28">

        {/* Parallax bg orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/6 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-secondary blur-2xl opacity-50" />
        </div>

        {/* ── 3-D floating objects ── */}
        {/* Each moves at a slightly different parallax rate for depth */}
        {/* Ring */}
        <div
          className="absolute top-[14%] right-[7%] w-24 h-24 rounded-full border-[3px] border-primary/30 animate-float-3d-a pointer-events-none hidden md:block"
          style={{
            boxShadow: "0 0 32px hsl(var(--primary)/0.14), inset 0 0 18px hsl(var(--primary)/0.06)",
            filter: "drop-shadow(0 8px 18px hsl(var(--primary)/0.18))",
            transform: `translateY(${scrollY * -0.06}px)`,
          }}
        />
        {/* Cube */}
        <div
          className="absolute top-[28%] left-[5%] w-16 h-16 rounded-2xl animate-float-3d-b pointer-events-none hidden lg:block"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.05) 100%)",
            border: "1px solid hsl(var(--primary)/0.22)",
            boxShadow: "5px 10px 30px hsl(var(--primary)/0.18), -2px -2px 8px hsl(0 0% 100%/0.7), inset 1px 1px 3px hsl(0 0% 100%/0.5)",
            transform: `translateY(${scrollY * -0.04}px)`,
          }}
        />
        {/* Sphere */}
        <div
          className="absolute bottom-[22%] right-[18%] w-14 h-14 rounded-full animate-float-3d-c pointer-events-none hidden md:block"
          style={{
            background: "radial-gradient(circle at 35% 30%, hsl(var(--primary)/0.38) 0%, hsl(var(--primary)/0.08) 70%)",
            boxShadow: "4px 8px 24px hsl(var(--primary)/0.22), -2px -3px 8px hsl(0 0% 100%/0.55), inset -3px -3px 10px hsl(0 0% 0%/0.08)",
            transform: `translateY(${scrollY * -0.08}px)`,
          }}
        />
        {/* Hexagon */}
        <div
          className="absolute bottom-[32%] left-[13%] w-11 h-11 animate-float-3d-b pointer-events-none hidden lg:block"
          style={{
            background: "linear-gradient(135deg, hsl(var(--secondary)/0.95), hsl(var(--primary)/0.14))",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            boxShadow: "0 6px 22px hsl(var(--primary)/0.18)",
            animationDelay: "1.6s",
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        />
        {/* Small dot */}
        <div
          className="absolute top-[52%] right-[4%] w-7 h-7 rounded-full animate-float-3d-a pointer-events-none hidden lg:block"
          style={{
            background: "hsl(var(--primary)/0.22)",
            boxShadow: "0 4px 14px hsl(var(--primary)/0.28)",
            animationDelay: "3s",
            transform: `translateY(${scrollY * -0.03}px)`,
          }}
        />

        {/* Hero text */}
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            FREE LIVE WEBINAR — Limited Seats
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-6 text-foreground animate-fade-up">
            45 Minutes That Can
            <br />
            <span className="text-primary italic">Change Your Gut Forever</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/65 max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed font-body">
            Join Dr. Aman Deep Rana live on Zoom as he reveals the exact framework
            that restored gut health for 5,000+ patients — completely free, no
            strings attached.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 text-sm animate-fade-up font-body">
            <span className="flex items-center gap-2 text-foreground/60">
              📅 <strong className="text-foreground">Saturday, 29th March 2025</strong>
            </span>
            <span className="flex items-center gap-2 text-foreground/60">
              ⏰ <strong className="text-foreground">7:00 PM IST</strong>
            </span>
            <span className="flex items-center gap-2 text-foreground/60">
              🔴 <strong className="text-foreground">Live on Zoom</strong>
            </span>
            <span className="flex items-center gap-2 font-semibold text-orange-500">
              🔥 Only {seatsLeft} seats left
            </span>
          </div>

          <div className="max-w-xs mx-auto mt-6">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-400 rounded-full transition-all duration-1000"
                style={{ width: `${seatsFilled}%` }}
              />
            </div>
            <p className="text-xs text-foreground/45 mt-1.5 font-body">{seatsFilled} of 100 seats reserved</p>
          </div>
        </div>
      </div>

      {/* ── Main Content + Sticky CTA ──────────────────────────────────────────── */}
      <div className="container mx-auto py-14 lg:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 xl:gap-16 items-start">

          {/* ── Left: Scrollable content ─────────────────────────────────────── */}
          <div className="space-y-16 lg:space-y-20">

            {/* What You'll Learn */}
            <div>
              <AnimatedSection variant="left">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                    What You'll Learn
                  </h2>
                  <p className="text-foreground/55 font-body">
                    4 science-backed sessions, each with a clear, actionable takeaway.
                  </p>
                </div>
              </AnimatedSection>
              <div className="space-y-4">
                {agenda.map((a, i) => (
                  <AnimatedSection key={i} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
                    <div className="glass-card rounded-2xl p-6 border border-border/60">
                      <div className="flex gap-5">
                        <span className="text-4xl md:text-5xl font-display font-bold text-primary/20 shrink-0 leading-none mt-1">
                          {a.num}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-bold text-foreground text-xl mb-2">{a.title}</h4>
                          <p className="text-sm text-foreground/60 mb-3 leading-relaxed font-body">{a.desc}</p>
                          <div className="inline-flex items-center gap-2 text-xs text-primary font-semibold bg-primary/8 px-3 py-1.5 rounded-full font-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {a.outcome}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* What You'll Get */}
            <div>
              <AnimatedSection variant="tilt">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                    What You'll Get From This Webinar
                  </h2>
                  <p className="text-foreground/55 font-body">
                    Beyond information — walk away with tools, frameworks, and clarity
                    you can act on the very next day.
                  </p>
                </div>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <AnimatedSection key={i} delay={i * 70} variant={i % 3 === 0 ? "scale" : i % 2 === 0 ? "left" : "right"}>
                    <div className="glass-card rounded-2xl p-5 border border-border/60 h-full">
                      <div className="text-2xl mb-3">{b.icon}</div>
                      <h4 className="font-display font-bold text-foreground text-lg mb-1.5">{b.title}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed font-body">{b.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* How It Will Help */}
            <AnimatedSection variant="tilt">
              <div className="glass-card rounded-3xl p-8 md:p-10 border border-primary/20"
                   style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.04) 0%, hsl(var(--background)) 60%)" }}>
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                  How This Webinar Will Help You
                </h2>
                <p className="text-foreground/65 mb-8 leading-relaxed text-sm md:text-base font-body">
                  Most people suffering from gut issues have tried everything —
                  antacids, elimination diets, expensive supplements — only to end up
                  back where they started. This webinar cuts through the noise with
                  15 years of clinical insight, helping you shift from symptom
                  management to genuine recovery.
                </p>
                <div className="space-y-3">
                  {transformations.map((item, i) => (
                    <AnimatedSection key={i} delay={i * 70} variant="scale">
                      <div className="flex items-center gap-3 text-sm bg-background/75 rounded-xl p-3 md:p-4"
                           style={{ boxShadow: "0 2px 8px hsl(0 0% 0% / 0.04)" }}>
                        <div className="flex-1 text-right text-foreground/40 line-through text-xs md:text-sm font-body">
                          {item.before}
                        </div>
                        <div className="text-primary font-bold text-xl shrink-0 font-display">→</div>
                        <div className="flex-1 text-foreground font-semibold text-xs md:text-sm font-body">
                          {item.after}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* About the Expert */}
            <AnimatedSection variant="left">
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                About Your Host
              </h2>
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/60 flex gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/25 shrink-0 flex items-center justify-center text-3xl"
                     style={{ boxShadow: "0 4px 16px hsl(var(--primary)/0.2), inset 0 0 12px hsl(var(--primary)/0.06)" }}>
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                    Dr. Aman Deep Rana
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-3 font-body">
                    Gut Health &amp; Integrative Medicine Specialist
                  </p>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4 font-body">
                    Dr. Aman Deep Rana has spent 15+ years helping patients overcome
                    chronic gut issues — acidity, IBS, bloating, and GERD — without
                    long-term medication or invasive procedures. He is the founder of
                    the Healing Miles Protocol, a structured 4-step model that has
                    transformed gut health for 5,000+ patients across India.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["5,000+ patients helped", "15+ years experience", "92% success rate"].map((s) => (
                      <span
                        key={s}
                        className="text-xs text-foreground/55 bg-secondary px-3 py-1.5 rounded-full font-body"
                        style={{ boxShadow: "0 2px 6px hsl(0 0% 0% / 0.05)" }}
                      >
                        ✅ {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonials */}
            <div>
              <AnimatedSection variant="up">
                <h2 className="text-2xl font-display text-foreground mb-6">
                  What Past Attendees Say
                </h2>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((t, i) => (
                  <AnimatedSection key={i} delay={i * 90} variant={i === 1 ? "tilt" : i % 2 === 0 ? "left" : "right"}>
                    <div className="glass-card rounded-2xl p-5 border border-border/60 flex flex-col h-full">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <span key={s} className="text-primary text-sm">★</span>
                        ))}
                      </div>
                      <p className="text-sm text-foreground/65 italic mb-4 flex-1 leading-relaxed font-body">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                        <div>
                          <p className="font-display font-semibold text-foreground">{t.name}</p>
                          <p className="text-xs text-foreground/45 font-body">{t.location}</p>
                        </div>
                        <span className="text-xs text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full font-body">
                          {t.result}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Sticky CTA ─────────────────────────────────────────────── */}
          <div className="mt-12 lg:mt-0">
            <div className="sticky top-28 space-y-4">

              <div
                className="glass-card rounded-3xl overflow-hidden border border-border"
                style={{ boxShadow: "0 8px 40px hsl(var(--primary)/0.15), 0 2px 8px hsl(0 0% 0%/0.06)" }}
              >
                <div className="bg-primary text-primary-foreground py-3 px-6 text-center text-xs font-bold tracking-widest uppercase font-body"
                     style={{ textShadow: "0 1px 3px hsl(0 0% 0%/0.15)" }}>
                  🔴 LIVE · Sat 29 March · 7:00 PM IST
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-display text-foreground mb-1">
                    Reserve Your Free Seat
                  </h3>
                  <p className="text-sm text-foreground/55 mb-5 font-body">
                    Join the 5,000+ people who've healed their gut with Dr. Rana's guidance.
                  </p>

                  {/* Seat urgency */}
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-3.5 mb-5 text-center">
                    <p className="text-orange-600 text-xs font-semibold font-body">
                      🔥 Only{" "}
                      <span className="text-xl font-bold">{seatsLeft}</span> seats remaining
                    </p>
                    <div className="mt-2 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-400 rounded-full transition-all duration-1000"
                        style={{ width: `${seatsFilled}%` }}
                      />
                    </div>
                    <p className="text-xs text-orange-400 mt-1.5 font-body">
                      {seatsFilled} of 100 seats reserved
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/38 focus:outline-none focus:border-primary transition-all text-sm font-body"
                      style={{ boxShadow: "inset 0 1px 3px hsl(0 0% 0%/0.04)" }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/38 focus:outline-none focus:border-primary transition-all text-sm font-body"
                      style={{ boxShadow: "inset 0 1px 3px hsl(0 0% 0%/0.04)" }}
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/38 focus:outline-none focus:border-primary transition-all text-sm font-body"
                      style={{ boxShadow: "inset 0 1px 3px hsl(0 0% 0%/0.04)" }}
                    />
                    <button type="submit" className="btn-primary w-full py-4 text-base font-body">
                      Reserve My Free Seat →
                    </button>
                    <p className="text-center text-xs text-foreground/40 font-body">
                      ⚡ Free · No spam · Unsubscribe anytime
                    </p>
                  </form>

                  {/* Included */}
                  <div className="mt-5 pt-5 border-t border-border/50">
                    <p className="text-xs font-semibold text-foreground/45 uppercase tracking-wider mb-3 font-body">
                      What's included
                    </p>
                    <div className="space-y-2">
                      {included.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-foreground/65 font-body">
                          <span className="text-primary text-xs mt-0.5 shrink-0">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust strip */}
              <div className="flex items-center justify-center gap-4 text-xs text-foreground/38 py-1 font-body">
                <span>🔒 Secure</span>
                <span>·</span>
                <span>100% Free</span>
                <span>·</span>
                <span>No credit card</span>
              </div>

              {/* Mini social proof */}
              <div className="glass-card rounded-2xl p-4 border border-border/60 text-center">
                <p className="text-xs text-foreground/50 mb-2 font-body">Trusted by patients from</p>
                <div className="flex justify-center gap-3 text-xs font-medium text-foreground/55 font-body">
                  <span>Mumbai</span>
                  <span>·</span>
                  <span>Delhi</span>
                  <span>·</span>
                  <span>Bangalore</span>
                  <span>·</span>
                  <span>+40 cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
