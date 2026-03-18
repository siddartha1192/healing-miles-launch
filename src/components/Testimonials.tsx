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
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none px-4 md:px-0"
          style={{ scrollbarWidth: "none", scrollPaddingLeft: "1rem" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[80vw] sm:min-w-[340px] md:min-w-[400px] max-w-[85vw] sm:max-w-none glass-card p-6 md:p-8 rounded-[24px] md:rounded-[32px] snap-center shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-primary mb-3 text-sm md:text-base">★★★★★</div>
                <p className="text-base md:text-lg italic mb-5 text-foreground leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-foreground/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm md:text-base">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.location} · {t.condition}</p>
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
