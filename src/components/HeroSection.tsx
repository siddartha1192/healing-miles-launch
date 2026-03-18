import { useNavigate } from "react-router-dom";
import { useReveal, useCounter } from "@/hooks/use-reveal";
import heroTexture from "@/assets/hero-texture.jpg";

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal();
  const count = useCounter(target, visible);
  return (
    <div ref={ref}>
      <div className="text-4xl font-display text-primary mb-1 tabular">{count}{suffix}</div>
      <div className="text-xs uppercase tracking-widest text-foreground/60">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${heroTexture})` }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 leading-[1.1] text-foreground">
            Stop Managing Symptoms. <br />
            <span className="text-primary">Start Fixing the Real Cause.</span>
          </h1>
          <p className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-2xl text-pretty">
            Root Cause Gut Health Correction for Urban Professionals — by Dr. Aman, 15+ Years Clinical Experience.
          </p>
          <div className="flex flex-wrap gap-4 mb-20">
            <button onClick={() => { navigate("/consultation"); window.scrollTo({ top: 0 }); }} className="btn-primary flex items-center gap-2">
              Book 1:1 Consultation — ₹799
            </button>
            <button onClick={() => { navigate("/webinar"); window.scrollTo({ top: 0 }); }} className="btn-outline">
              Join Free Webinar →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-foreground/10 pt-12">
            <StatCounter target={15} suffix="+" label="Years Experience" />
            <StatCounter target={5000} suffix="+" label="Patients Treated" />
            <StatCounter target={92} suffix="%" label="Satisfaction Rate" />
            <StatCounter target={100} suffix="+" label="Webinars Conducted" />
          </div>
        </div>
      </div>
    </section>
  );
}
