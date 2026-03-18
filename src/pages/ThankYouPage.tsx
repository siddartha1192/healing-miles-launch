import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const data = {
  webinar: {
    tag: "Webinar · Registered",
    headline: ["Your Seat", "is Saved."],
    sub: "Dr. Aman will see you live on Zoom. Check your inbox for the Zoom link and your free Gut Health PDF.",
    detail: "Saturday, 29 March · 7:00 PM IST",
    steps: [
      { n: "01", title: "Check your inbox", body: "Zoom link + free Gut Health PDF sent to your email." },
      { n: "02", title: "Set a reminder", body: "Add to calendar — 15 min before so you don't miss a word." },
      { n: "03", title: "Prepare one question", body: "Dr. Aman answers live. Come with your biggest gut question." },
    ],
    cta: { label: "Book a Private Consultation", sub: "₹799 · 45-min 1:1 with Dr. Aman", route: "/consultation" },
  },
  consultation: {
    tag: "Consultation · Confirmed",
    headline: ["Dr. Aman", "Will See You."],
    sub: "Your session is locked in. Complete the intake form in your email at least 1 hour before the call.",
    detail: "Check your email for date, time & Zoom link",
    steps: [
      { n: "01", title: "Fill the intake form", body: "Sent to your email — 10 min, helps Dr. Aman prep for your case." },
      { n: "02", title: "Join 2 min early", body: "Log into Zoom before your slot so the session starts on time." },
      { n: "03", title: "Write your top 3 concerns", body: "Come prepared — Dr. Aman will address each one directly." },
    ],
    cta: { label: "Join the Free Webinar", sub: "While you wait — understand your gut better", route: "/webinar" },
  },
};

export default function ThankYouPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const type = params.get("type") === "consultation" ? "consultation" : "webinar";
  const d = data[type];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="grain-overlay" />
      <Navbar />

      <main className="min-h-screen bg-background relative overflow-hidden">

        {/* ── Background layers ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--foreground)/0.055) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Radial fade */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)" }} />
          {/* Primary glow — top left */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: "hsl(var(--primary)/0.18)" }} />
          {/* Accent glow — bottom right */}
          <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "hsl(var(--primary)/0.10)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 max-w-6xl">

          {/* ── Tag ── */}
          <div
            className="mb-10"
            style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s ease 0ms" }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full"
              style={{ background: "hsl(var(--primary)/0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary)/0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              {d.tag}
            </span>
          </div>

          {/* ── Giant headline ── */}
          <div
            className="mb-10"
            style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease 80ms" }}
          >
            <h1
              className="font-display font-bold leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
            >
              <span className="text-foreground block">{d.headline[0]}</span>
              <span className="text-primary italic block">{d.headline[1]}</span>
            </h1>
          </div>

          {/* ── Two-col: sub + steps ── */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div
              style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 160ms" }}
            >
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-6 font-light">
                {d.sub}
              </p>

              {/* Detail pill */}
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl mb-10 text-sm font-semibold"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
              >
                <span className="text-primary text-lg">📅</span>
                <span className="text-foreground">{d.detail}</span>
              </div>

              {/* CTA block */}
              <div
                className="rounded-3xl p-7"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--primary)/0.2)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">While you're here</p>
                <p className="text-foreground/60 text-sm mb-5">{d.cta.sub}</p>
                <button
                  onClick={() => { navigate(d.cta.route); window.scrollTo({ top: 0 }); }}
                  className="btn-primary w-full py-4 text-base"
                >
                  {d.cta.label} →
                </button>
              </div>

              {/* Back home */}
              <button
                onClick={() => { navigate("/"); window.scrollTo({ top: 0 }); }}
                className="mt-6 text-sm text-foreground/35 hover:text-foreground/60 transition-colors flex items-center gap-1"
              >
                ← Back to Home
              </button>
            </div>

            {/* Right — Steps */}
            <div className="space-y-5">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/35 mb-6"
                style={{ opacity: show ? 1 : 0, transition: "all 0.6s ease 240ms" }}
              >
                What to do next
              </p>
              {d.steps.map((s, i) => (
                <div
                  key={i}
                  className="group flex gap-6 items-start p-6 rounded-2xl transition-all duration-300 cursor-default"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    opacity: show ? 1 : 0,
                    transform: show ? "translateX(0)" : "translateX(30px)",
                    transition: `opacity 0.6s ease ${300 + i * 100}ms, transform 0.6s ease ${300 + i * 100}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px hsl(var(--primary)/0.12)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(var(--primary)/0.3)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(var(--border))";
                  }}
                >
                  {/* Number */}
                  <span
                    className="font-display font-bold leading-none flex-shrink-0"
                    style={{ fontSize: "3rem", color: "hsl(var(--primary)/0.2)", lineHeight: 1 }}
                  >
                    {s.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display font-bold text-foreground text-lg mb-1">{s.title}</h3>
                    <p className="text-foreground/55 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
