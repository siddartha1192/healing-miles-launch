import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useNavigate } from "react-router-dom";
import { Video, Stethoscope, CreditCard, MessageCircle, ArrowRight } from "lucide-react";

const categories = [
  { id: "all",          label: "All",          icon: MessageCircle },
  { id: "webinar",      label: "Webinar",      icon: Video },
  { id: "consultation", label: "Consultation", icon: Stethoscope },
  { id: "billing",      label: "Billing",      icon: CreditCard },
];

const faqs = [
  {
    category: "webinar",
    q: "Is the webinar really free? What's the catch?",
    a: "There is no catch — the webinar is completely free of charge. Dr. Aman believes that education is the first step toward healing. Most gut health problems persist because people never understand what's actually causing them.\n\nThe webinar is designed to give you that clarity: you'll learn the science behind root-cause gut correction, common mistakes people make with diet and medications, and what a structured recovery actually looks like.\n\nNo upsells during the session. No pressure. Just knowledge.",
  },
  {
    category: "webinar",
    q: "Will I get a recording if I can't attend live?",
    a: "Yes. Every registered participant receives a full recording within 24 hours of the live session.\n\nThe recording includes all slides, Q&A segments, and the protocol overview Dr. Aman walks through. It stays accessible for 7 days so you can revisit it at your own pace.\n\nWe recommend watching it in one sitting — the structure builds on itself and is most effective when taken in as a whole.",
  },
  {
    category: "webinar",
    q: "What will I actually learn in the webinar?",
    a: "The webinar covers three core areas:\n\n1. Why conventional treatments like antacids and PPIs fail long-term, and the gut damage they can silently cause over time.\n\n2. The real root causes behind acidity, bloating, IBS, and chronic digestive discomfort — from microbiome imbalance to stress-axis dysregulation.\n\n3. The clinical framework Dr. Aman uses with patients to identify and correct the root cause — not just manage symptoms.\n\nYou'll walk away with a completely different understanding of your gut.",
  },
  {
    category: "consultation",
    q: "What exactly happens during the consultation?",
    a: "The consultation is a structured 45-minute deep-dive with Dr. Aman — not a rushed appointment.\n\nIt begins with a detailed review of your symptom history: how long you've had them, what triggers them, what you've already tried. Dr. Aman then maps your lifestyle, stress patterns, sleep quality, and diet to identify where your gut is breaking down.\n\nBy the end of the session, you receive a personalised root-cause assessment and a clear recovery roadmap — specific, actionable, and built entirely around your situation. Not generic advice.",
  },
  {
    category: "consultation",
    q: "How long is the consultation?",
    a: "Each session runs 40 to 45 minutes.\n\nThis is intentionally longer than a standard clinic appointment — because rushing through your history leads to surface-level treatment. You'll have time to ask questions, share context Dr. Aman may need, and fully understand the plan before the call ends.\n\nIf your case is complex and a follow-up is needed, that recommendation will be made clearly at the end of the session.",
  },
  {
    category: "consultation",
    q: "Is the consultation online or in-person?",
    a: "The consultation is fully online via secure video call — join from anywhere in India or abroad.\n\nYou'll receive a private video link in your confirmation email. All you need is a stable internet connection and a quiet space. No app downloads required.\n\nThe experience mirrors an in-person consultation: Dr. Aman gives his complete, undivided attention for the full session.",
  },
  {
    category: "consultation",
    q: "Can I reschedule my appointment?",
    a: "Yes — rescheduling is allowed up to 24 hours before your confirmed slot at no extra cost.\n\nSimply use the link in your confirmation email to pick a new time that works for you. If you need to cancel with less than 24 hours' notice, the amount can be applied as credit toward a rescheduled session within 30 days.\n\nWe understand schedules change — flexibility is built into the process.",
  },
  {
    category: "billing",
    q: "Is my payment secure?",
    a: "Yes, completely. All transactions are processed through Razorpay — PCI-DSS Level 1 compliant, which is the highest standard of payment security available.\n\nYour card details are never stored on our servers. Payments are SSL-encrypted end-to-end.\n\nYou'll receive an instant confirmation email and a digital receipt immediately after checkout.",
  },
  {
    category: "billing",
    q: "What does the ₹799 consultation fee include?",
    a: "The ₹799 covers everything for a complete session:\n\n• Full 45-minute one-on-one consultation with Dr. Aman\n• Personalised root-cause assessment based on your history\n• A recovery roadmap document shared after the call\n\nNo hidden charges. If Dr. Aman recommends further tests or a clinical program after the consultation, those are entirely separate and your choice to pursue. The consultation itself is a complete, standalone service.",
  },
];

export default function FAQ() {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState(0);

  const filtered = faqs.filter(
    (f) => activeCategory === "all" || f.category === activeCategory
  );

  const activeFaq = filtered[selected] ?? filtered[0];
  const safeSelected = filtered[selected] ? selected : 0;

  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* heading */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl text-foreground mb-3">Questions We Hear Often</h2>
          <p className="text-foreground/55 text-base max-w-lg mx-auto">
            Real answers — no fluff. Click any question to read more.
          </p>
        </div>

        {/* category tabs */}
        <div className={`flex flex-wrap gap-2 justify-center mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSelected(0); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
                  ${active
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_14px_hsl(var(--primary)/0.3)]"
                    : "bg-background/60 text-foreground/60 border-border hover:border-primary/40 hover:text-foreground"
                  }`}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* split panel */}
        <div className={`grid md:grid-cols-[1fr_1.6fr] gap-4 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

          {/* left — question list */}
          <div className="flex flex-col gap-2">
            {filtered.map((f, i) => {
              const isActive = safeSelected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 group
                    ${isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_6px_24px_hsl(var(--primary)/0.25)]"
                      : "bg-background/50 border-border text-foreground/70 hover:border-primary/30 hover:text-foreground hover:bg-background"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 text-xs font-bold tabular shrink-0 ${isActive ? "text-primary-foreground/70" : "text-foreground/30 group-hover:text-primary"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-sm font-medium leading-snug ${isActive ? "text-primary-foreground" : ""}`}>
                      {f.q}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* right — answer panel */}
          <div className="relative">
            <div
              key={`${activeCategory}-${safeSelected}`}
              className="bg-background rounded-2xl border border-border p-8 md:p-10 h-full min-h-[340px] flex flex-col justify-between shadow-[0_8px_40px_hsl(0_0%_0%/0.06)] animate-[fade-up_0.35s_ease_forwards]"
            >
              {/* category tag */}
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-5 px-3 py-1 rounded-full border border-primary/25 bg-primary/5">
                  {activeFaq?.category}
                </span>

                {/* question */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-snug">
                  {activeFaq?.q}
                </h3>

                {/* divider */}
                <div className="w-10 h-0.5 bg-primary/40 mb-6 rounded-full" />

                {/* answer — render paragraphs split by \n\n */}
                <div className="space-y-4">
                  {activeFaq?.a.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-foreground/70 text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* next question hint */}
              {safeSelected < filtered.length - 1 && (
                <button
                  onClick={() => setSelected(safeSelected + 1)}
                  className="mt-8 flex items-center gap-2 text-xs text-foreground/35 hover:text-primary transition-colors duration-200 self-start group"
                >
                  <span>Next: {filtered[safeSelected + 1]?.q.slice(0, 48)}…</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* bottom CTA */}
        <div className={`mt-14 text-center transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-foreground/45 text-sm mb-4">Still have a question?</p>
          <button
            onClick={() => { navigate("/consultation"); window.scrollTo({ top: 0 }); }}
            className="btn-outline text-sm px-6 py-2.5"
          >
            Ask Dr. Aman Directly →
          </button>
        </div>

      </div>
    </section>
  );
}
