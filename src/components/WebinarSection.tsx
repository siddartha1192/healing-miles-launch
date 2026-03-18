import { useReveal } from "@/hooks/use-reveal";

const agenda = [
  { title: "Why Acidity Keeps Returning", desc: "The hidden cycle behind medication dependency and how to break it." },
  { title: "The Gut–Stress Connection", desc: "How chronic stress silently destroys digestion through the vagus nerve." },
  { title: "Why Common Solutions Fail", desc: "The truth about antacids, random probiotics, and restrictive diets." },
  { title: "The Healing Miles Model", desc: "The exact framework that helped 5,000+ patients recover." },
];

export default function WebinarSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="webinar" className="py-24 md:py-32 section-dark">
      <div className="container mx-auto">
        <div ref={ref} className={`glass-card rounded-[40px] overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="bg-primary text-primary-foreground py-3 px-6 text-center text-sm font-bold tracking-widest uppercase">
            🔴 LIVE on Zoom | 7:00 PM IST | Only 100 Seats | Completely Free
          </div>
          <div className="p-6 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl mb-8 leading-tight text-foreground">
                45 Minutes That Can Change Your Gut Forever
              </h2>
              <div className="space-y-6">
                {agenda.map((a, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{a.title}</h4>
                      <p className="text-sm text-foreground/70">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-foreground/5 p-6 md:p-8 rounded-3xl border border-foreground/10">
              <h3 className="text-2xl mb-6 font-display text-foreground">Reserve Your Free Seat</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder="Mobile Number" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                <button type="submit" className="btn-primary w-full py-5 text-lg">Reserve My Free Seat</button>
                <p className="text-center text-xs text-foreground/50">⚡ Only 100 seats available — Fills up fast</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
