import { useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";

const checks = [
  "Suffering from chronic acidity, gas, or bloating for months/years",
  "Tried multiple doctors with no lasting relief",
  "Dependent on antacids or daily PPIs",
  "Experiencing stress-related digestive issues",
  "Confused by contradictory diet advice",
  "Looking for a structured, medical approach",
];

export default function IsThisForYou() {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-4xl">
        <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl md:text-5xl text-center mb-12 text-foreground">This is for you if...</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {checks.map((c, i) => (
              <div key={i} className="flex gap-4 items-center glass-card p-5 rounded-2xl">
                <span className="text-xl text-primary shrink-0">✅</span>
                <span className="text-foreground/80">{c}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl mb-8 text-foreground/70">If you checked even 2 of these — you need a correction plan.</p>
            <button onClick={() => { navigate("/consultation"); window.scrollTo({ top: 0 }); }} className="btn-primary">
              Book Your Consultation Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
