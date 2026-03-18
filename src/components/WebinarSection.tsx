import { useReveal } from "@/hooks/use-reveal";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const agenda = [
  {
    num: "01",
    title: "Why Acidity Keeps Returning",
    desc: "The hidden cycle behind medication dependency — why antacids provide temporary relief but never fix the root cause, and the exact pattern that keeps you trapped in the cycle.",
    outcome: "Understand the true root cause of recurring acidity",
  },
  {
    num: "02",
    title: "The Gut–Stress Connection",
    desc: "How chronic stress silently destroys digestion through the vagus nerve — and a simple daily 10-minute practice that can begin reversing the damage starting tonight.",
    outcome: "Learn to calm your nervous system for better digestion",
  },
  {
    num: "03",
    title: "Why Common Solutions Fail",
    desc: "The hard truth about antacids, random probiotics, and restrictive diets — why most popular advice makes things worse, and what actually works according to clinical data.",
    outcome: "Stop wasting money on solutions that don't address the cause",
  },
  {
    num: "04",
    title: "The Healing Miles Model",
    desc: "The exact 4-step framework Dr. Aman has used with 5,000+ patients — a structured, science-backed protocol you can start applying from day one, step by step.",
    outcome: "Walk away with a clear, proven action plan you can start today",
  },
];

const benefits = [
  {
    icon: "🎯",
    title: "Clarity on Your Root Cause",
    desc: "Finally understand WHY your gut issues keep recurring — not just the symptoms, but the actual biological and lifestyle triggers unique to your situation.",
  },
  {
    icon: "📋",
    title: "Personalised Gut Insights",
    desc: "Discover which gut-stress pattern you fall into and what specific changes will make the biggest, fastest difference for your specific body type.",
  },
  {
    icon: "🛠️",
    title: "A Ready-to-Use Framework",
    desc: "Leave with Dr. Aman's complete 4-step Healing Miles Model — a practical roadmap with daily actions you can start the very next morning.",
  },
  {
    icon: "💊",
    title: "A Path to Medication Freedom",
    desc: "Understand how to gradually and safely reduce dependency on antacids using a medically guided, natural approach without risky cold-turkey stops.",
  },
  {
    icon: "🧘",
    title: "Mind-Gut Reset Protocol",
    desc: "A proven 10-minute daily practice that repairs the gut-brain axis and measurably reduces stress-induced bloating within 2–3 weeks of consistent use.",
  },
  {
    icon: "🤝",
    title: "Live Q&A with Dr. Aman",
    desc: "Get your specific questions answered live in real time — rare, direct access to an expert with 15+ years of clinical experience and 5,000+ patients helped.",
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
    quote: "This webinar completely changed how I understood my gut. I've been off antacids for 3 months now. The vagus nerve explanation was the missing piece I never knew about.",
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
    quote: "Dr. Aman's framework gave me something no doctor had before — a WHY. Once I understood why I was suffering, the path to healing became obvious and achievable.",
  },
];

const included = [
  "45-min live session with Dr. Aman Khanna",
  "Gut Health Self-Assessment PDF (free)",
  "Live Q&A — ask your questions directly",
  "Recording link available for 48 hours",
  "Exclusive ₹300 off on first consultation",
];

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function WebinarSection() {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [seatsLeft, setSeatsLeft] = useState(100);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSeatsLeft(73), 1800);
    return () => clearTimeout(t);
  }, []);

  const seatsFilled = 100 - seatsLeft;

  return (
    <div
      id="webinar"
      className="relative bg-background min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(var(--foreground)/0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Radial mask fading the dot-grid out toward edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, transparent 40%, hsl(var(--background)) 100%)",
        }}
      />

      <div className="container mx-auto pt-8 pb-10 lg:pt-10 lg:pb-16 relative z-10">
        <div className="lg:grid lg:grid-cols-[1fr_460px] gap-14 lg:items-start">

          {/* ── LEFT COLUMN: scrollable ── */}
          <div className="space-y-16 lg:space-y-20">

            {/* Hero area */}
            <div className="relative">
              {/* Parallax decorative orbs — subtle background behind hero area only */}
              <div
                ref={heroBgRef}
                className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
                style={{ transform: `translateY(${scrollY * 0.12}px)` }}
              >
                <div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
                <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-primary/6 blur-3xl" />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-secondary blur-2xl opacity-60" />
              </div>

              <div className="relative z-10 py-10 md:py-14">
                {/* Live badge pill */}
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-6 animate-fade-up">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  FREE LIVE WEBINAR — Limited Seats
                </div>

                {/* H1 title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6 text-foreground animate-fade-up">
                  45 Minutes That Can
                  <br />
                  <span className="text-primary italic">Change Your Gut Forever</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-foreground/65 max-w-2xl mb-10 animate-fade-up leading-relaxed">
                  Join Dr. Aman Khanna live on Zoom as he reveals the exact framework
                  that restored gut health for 5,000+ patients — completely free, no
                  strings attached.
                </p>

                {/* Event meta row */}
                <div className="flex flex-wrap items-center gap-5 md:gap-8 text-sm animate-fade-up mb-6">
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

                {/* Seat progress bar */}
                <div className="max-w-xs">
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-400 rounded-full transition-all duration-1000"
                      style={{ width: `${seatsFilled}%` }}
                    />
                  </div>
                  <p className="text-xs text-foreground/45 mt-1.5">{seatsFilled} of 100 seats reserved</p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <AnimatedSection>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                  What You'll Learn
                </h2>
                <p className="text-foreground/55">
                  4 science-backed sessions, each with a clear, actionable takeaway.
                </p>
              </div>
              <div className="space-y-4">
                {agenda.map((a, i) => (
                  <AnimatedSection key={i} delay={i * 90}>
                    <div className="glass-card rounded-2xl p-6 border border-border/60">
                      <div className="flex gap-5">
                        <span className="text-3xl md:text-4xl font-display font-bold text-primary/25 shrink-0 leading-none mt-1">
                          {a.num}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-foreground text-lg mb-2">{a.title}</h4>
                          <p className="text-sm text-foreground/60 mb-3 leading-relaxed">{a.desc}</p>
                          <div className="inline-flex items-center gap-2 text-xs text-primary font-semibold bg-primary/8 px-3 py-1.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {a.outcome}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* What You'll Get */}
            <AnimatedSection>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                  What You'll Get From This Webinar
                </h2>
                <p className="text-foreground/55">
                  Beyond information — walk away with tools, frameworks, and clarity
                  you can act on the very next day.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <AnimatedSection key={i} delay={i * 70}>
                    <div className="glass-card rounded-2xl p-5 border border-border/60 h-full">
                      <div className="text-2xl mb-3">{b.icon}</div>
                      <h4 className="font-bold text-foreground mb-1.5">{b.title}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{b.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* How It Will Help You */}
            <AnimatedSection>
              <div className="glass-card rounded-3xl p-8 md:p-10 border border-primary/20 bg-primary/4">
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                  How This Webinar Will Help You
                </h2>
                <p className="text-foreground/65 mb-8 leading-relaxed text-sm md:text-base">
                  Most people suffering from gut issues have tried everything —
                  antacids, elimination diets, expensive supplements — only to
                  end up back where they started. This webinar cuts through the
                  noise with 15 years of clinical insight, helping you shift from
                  symptom management to genuine recovery.
                </p>
                <div className="space-y-3">
                  {transformations.map((item, i) => (
                    <AnimatedSection key={i} delay={i * 60}>
                      <div className="flex items-center gap-3 text-sm bg-background/70 rounded-xl p-3 md:p-4">
                        <div className="flex-1 text-right text-foreground/45 line-through text-xs md:text-sm">
                          {item.before}
                        </div>
                        <div className="text-primary font-bold text-lg shrink-0">→</div>
                        <div className="flex-1 text-foreground font-medium text-xs md:text-sm">
                          {item.after}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* About the Expert */}
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                About Your Host
              </h2>
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/60 flex gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/25 shrink-0 flex items-center justify-center text-3xl">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    Dr. Aman Khanna
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-3">
                    Gut Health &amp; Integrative Medicine Specialist
                  </p>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4">
                    Dr. Aman has spent 15+ years helping patients overcome chronic
                    gut issues — acidity, IBS, bloating, and GERD — without
                    long-term medication or invasive procedures. He is the founder
                    of the Healing Miles Protocol, a structured 4-step model
                    that has transformed gut health for 5,000+ patients across India.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["5,000+ patients helped", "15+ years experience", "92% success rate"].map((s) => (
                      <span
                        key={s}
                        className="text-xs text-foreground/55 bg-secondary px-3 py-1 rounded-full"
                      >
                        ✅ {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonials */}
            <AnimatedSection>
              <h2 className="text-2xl font-display text-foreground mb-6">
                What Past Attendees Say
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((t, i) => (
                  <AnimatedSection key={i} delay={i * 80}>
                    <div className="glass-card rounded-2xl p-5 border border-border/60 flex flex-col h-full">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <span key={s} className="text-primary text-sm">★</span>
                        ))}
                      </div>
                      <p className="text-sm text-foreground/65 italic mb-4 flex-1 leading-relaxed">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                        <div>
                          <p className="font-semibold text-foreground text-sm">{t.name}</p>
                          <p className="text-xs text-foreground/45">{t.location}</p>
                        </div>
                        <span className="text-xs text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
                          {t.result}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* ── RIGHT COLUMN: sticky form ── */}
          <div className="mt-12 lg:mt-0 lg:self-start lg:sticky lg:top-24">
            <div className="space-y-4">

              {/* Registration Card */}
              <div className="glass-card rounded-3xl overflow-hidden border border-border shadow-lg">
                {/* Banner */}
                <div className="bg-primary text-primary-foreground py-3 px-6 text-center text-xs font-bold tracking-widest uppercase">
                  🔴 LIVE · Sat 29 March · 7:00 PM IST
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="text-xl font-display text-foreground mb-1">
                    Reserve Your Free Seat
                  </h3>
                  <p className="text-sm text-foreground/55 mb-5">
                    Join the 5,000+ people who've healed their gut with Dr. Aman's
                    guidance.
                  </p>

                  {/* Seat urgency */}
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-3.5 mb-5 text-center">
                    <p className="text-orange-600 text-xs font-semibold">
                      🔥 Only{" "}
                      <span className="text-xl font-bold">{seatsLeft}</span> seats
                      remaining
                    </p>
                    <div className="mt-2 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-400 rounded-full transition-all duration-1000"
                        style={{ width: `${seatsFilled}%` }}
                      />
                    </div>
                    <p className="text-xs text-orange-400 mt-1.5">
                      {seatsFilled} of 100 seats reserved
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); navigate("/thank-you?type=webinar"); window.scrollTo({ top: 0 }); }}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-foreground/38 focus:outline-none focus:border-primary transition-colors text-base"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-foreground/38 focus:outline-none focus:border-primary transition-colors text-base"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-foreground/38 focus:outline-none focus:border-primary transition-colors text-base"
                    />
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 text-base"
                    >
                      Reserve My Free Seat →
                    </button>
                    <p className="text-center text-xs text-foreground/40">
                      ⚡ Free · No spam · Unsubscribe anytime
                    </p>
                  </form>

                  {/* Included */}
                  <div className="mt-5 pt-5 border-t border-border/50">
                    <p className="text-xs font-semibold text-foreground/45 uppercase tracking-wider mb-3">
                      What's included
                    </p>
                    <div className="space-y-2">
                      {included.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-foreground/65"
                        >
                          <span className="text-primary text-xs mt-0.5 shrink-0">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust strip */}
              <div className="flex items-center justify-center gap-4 text-xs text-foreground/38 py-1">
                <span>🔒 Secure</span>
                <span>·</span>
                <span>100% Free</span>
                <span>·</span>
                <span>No credit card</span>
              </div>

              {/* Mini social proof */}
              <div className="glass-card rounded-2xl p-4 border border-border/60 text-center">
                <p className="text-xs text-foreground/50 mb-2">Trusted by patients from</p>
                <div className="flex justify-center gap-3 text-xs font-medium text-foreground/55">
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
