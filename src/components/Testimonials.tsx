import { useReveal } from "@/hooks/use-reveal";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  { name: "Rahul S.", location: "Mumbai", condition: "Chronic Acidity", quote: "Complete relief in 8 weeks. Finally understood why antacids never worked!" },
  { name: "Priya M.", location: "Delhi", condition: "IBS-D", quote: "Dr. Aman explained what 5 doctors couldn't. Back to a normal diet now." },
  { name: "Amit K.", location: "Bangalore", condition: "Bloating", quote: "The gut-brain connection was the missing piece. No more flare-ups." },
  { name: "Neha D.", location: "Pune", condition: "Chronic Gas", quote: "Root cause found and fixed. Healthy digestion finally restored." },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[activeIndex] as HTMLElement;
      if (card) {
        scrollRef.current.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-24 md:py-32 section-dark overflow-hidden">
      <div className="container mx-auto">
        <h2
          ref={ref}
          className={`text-3xl md:text-5xl text-center mb-16 text-foreground transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Real People. Real Gut Transformation.
        </h2>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[400px] glass-card p-8 rounded-[32px] snap-center shrink-0"
            >
              <div className="text-primary mb-4">★★★★★</div>
              <p className="text-lg italic mb-6 text-foreground">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.location} • {t.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-primary w-6" : "bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
