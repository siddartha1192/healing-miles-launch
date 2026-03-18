import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useReveal, useCounter } from "@/hooks/use-reveal";
import heroTexture from "@/assets/hero-texture.jpg";

const DR_AMAN_URL = "https://res.cloudinary.com/djx5oiwkz/image/upload/v1773863596/whatsapp-media/file_cnj1ju.png";

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal();
  const count = useCounter(target, visible);
  return (
    <div ref={ref}>
      <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-1 tabular" style={{ color: "hsl(28, 45%, 18%)" }}>{count}{suffix}</div>
      <div className="text-xs uppercase tracking-widest text-foreground/60">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateY = ((x - cx) / cx) * 10;
    const rotateX = -((y - cy) / cy) * 7;
    card.style.transform = `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.03)`;

    // Move shine gradient with cursor
    if (glowRef.current) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, hsl(0 0% 100% / 0.22) 0%, transparent 60%)`;
    }
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1200px) rotateY(-10deg) rotateX(4deg)";
    if (glowRef.current) {
      glowRef.current.style.background = "linear-gradient(135deg, hsl(0 0% 100% / 0.14) 0%, transparent 50%)";
    }
  }

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-foreground/10 pt-8">
              <StatCounter target={15} suffix="+" label="Years Experience" />
              <StatCounter target={5000} suffix="+" label="Patients Treated" />
              <StatCounter target={92} suffix="%" label="Satisfaction Rate" />
              <StatCounter target={100} suffix="+" label="Webinars Conducted" />
            </div>
          </div>

          {/* Doctor photo — 3D card effect */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center md:w-[380px] lg:w-[440px] xl:w-[480px]" style={{ perspective: "1200px" }}>
            {/* Soft blurred glow behind the card */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: "85%",
                height: "85%",
                borderRadius: "28px",
                background: "hsl(41, 72%, 52%, 0.25)",
                filter: "blur(48px)",
                transform: "translateY(24px) scale(0.94)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                transform: "perspective(1200px) rotateY(-10deg) rotateX(4deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                borderRadius: "22px",
                background: "hsl(40, 30%, 98%)",
                zIndex: 1,
                boxShadow:
                  /* layered staircase depth */
                  "2px 4px 0px 0px hsl(35, 28%, 70%), " +
                  "4px 8px 0px 0px hsl(35, 22%, 80%), " +
                  "6px 12px 0px 0px hsl(35, 18%, 87%), " +
                  "8px 16px 0px 0px hsl(35, 14%, 92%), " +
                  /* deep ambient shadow */
                  "16px 40px 80px -8px hsl(30, 40%, 10%, 0.30), " +
                  /* near contact shadow */
                  "0 8px 24px -4px hsl(30, 35%, 8%, 0.22), " +
                  /* subtle border ring */
                  "0 0 0 1.5px hsl(38, 30%, 78%, 0.55)",
              }}
            >
              {/* Dynamic shine overlay — follows cursor */}
              <div
                ref={glowRef}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "22px",
                  background: "linear-gradient(135deg, hsl(0 0% 100% / 0.14) 0%, transparent 50%)",
                  zIndex: 2,
                  pointerEvents: "none",
                  transition: "background 0.1s ease",
                }}
              />

              {/* Verified badge */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "-14px",
                  zIndex: 4,
                  background: "hsl(41, 72% ,46%)",
                  color: "#fff",
                  borderRadius: "999px",
                  padding: "6px 14px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  boxShadow: "0 4px 14px hsl(30, 60%, 20%, 0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                ✓ Verified Specialist
              </div>

              {/* Experience tag bottom-left */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "-14px",
                  zIndex: 4,
                  background: "hsl(0 0% 100% / 0.92)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  boxShadow: "0 4px 20px hsl(30, 30%, 10%, 0.15), 0 0 0 1px hsl(38, 25%, 88%)",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: 800, color: "hsl(28, 45%, 18%)", lineHeight: 1 }}>15+</div>
                <div style={{ fontSize: "10px", color: "hsl(30, 10%, 45%)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "2px" }}>Years of Practice</div>
              </div>

              <img
                src={DR_AMAN_URL}
                alt="Dr. Aman"
                style={{ borderRadius: "22px", display: "block" }}
                className="w-full h-[420px] md:h-[500px] lg:h-[540px] object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
