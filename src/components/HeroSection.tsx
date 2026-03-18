import { useNavigate } from "react-router-dom";
import { useReveal, useCounter } from "@/hooks/use-reveal";
import heroTexture from "@/assets/hero-texture.jpg";

const DR_AMAN_URL = "https://res.cloudinary.com/djx5oiwkz/image/upload/v1773863596/whatsapp-media/file_cnj1ju.png";

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal();
  const count = useCounter(target, visible);
  return (
    <div ref={ref}>
      <div className="text-6xl font-display font-bold text-primary mb-1 tabular">{count}{suffix}</div>
      <div className="text-xs uppercase tracking-widest text-foreground/60">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroTexture})` }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/20 to-background" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1]">
              <span className="text-foreground">Your Gut Has Been Sending <br />
              Signals for Years.</span> <br />
              <span className="text-primary italic">It's Time Someone Actually Listened.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl text-pretty">
              Dr. Aman doesn't just treat symptoms — he finds the root cause your previous doctors missed. 15+ years, 5,000+ patients, one goal: lasting relief.
            </p>
            <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
              <button onClick={() => { navigate("/consultation"); window.scrollTo({ top: 0 }); }} className="btn-primary flex items-center gap-2">
                Book 1:1 Consultation — ₹799
              </button>
              <button onClick={() => { navigate("/webinar"); window.scrollTo({ top: 0 }); }} className="btn-outline">
                Join Free Webinar →
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-foreground/10 pt-10">
              <StatCounter target={15} suffix="+" label="Years Experience" />
              <StatCounter target={5000} suffix="+" label="Patients Treated" />
              <StatCounter target={92} suffix="%" label="Satisfaction Rate" />
              <StatCounter target={100} suffix="+" label="Webinars Conducted" />
            </div>
          </div>

          {/* Doctor photo — 3D card effect */}
          <div className="flex-shrink-0 flex justify-center md:justify-end" style={{ perspective: "1200px" }}>
            <div
              style={{
                transform: "perspective(1200px) rotateY(-10deg) rotateX(4deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.4s ease",
                borderRadius: "20px",
                background: "hsl(150, 35%, 97%)",
                boxShadow:
                  "2px 4px 0px 0px hsl(150, 30%, 72%), " +
                  "4px 8px 0px 0px hsl(150, 25%, 80%), " +
                  "6px 12px 0px 0px hsl(150, 22%, 87%), " +
                  "8px 16px 0px 0px hsl(150, 18%, 92%), " +
                  "20px 36px 60px -10px hsl(150, 40%, 10%, 0.2), " +
                  "0 0 0 1px hsl(150, 28%, 78%, 0.5)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "perspective(1200px) rotateY(-4deg) rotateX(2deg) scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "perspective(1200px) rotateY(-10deg) rotateX(4deg)";
              }}
            >
              {/* Shine highlight on top-left edge */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg, hsl(0 0% 100% / 0.18) 0%, transparent 50%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
              <img
                src={DR_AMAN_URL}
                alt="Dr. Aman"
                style={{ borderRadius: "20px", display: "block" }}
                className="w-72 md:w-96 lg:w-[420px] h-[420px] md:h-[540px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
