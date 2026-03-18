import { useReveal } from "@/hooks/use-reveal";
import drAmanImg from "@/assets/dr-aman.jpg";

const credentials = [
  "Treated 5,000+ patients with chronic IBS & Acidity",
  "Specialist in Gut-Brain Axis & Metabolic Health",
  "Pioneer of the \"Correction over Suppression\" model",
  "Published researcher in gastroenterology",
  "Regular speaker at national health summits",
];

export default function AboutDoctor() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="py-24 md:py-32 section-dark">
      <div className="container mx-auto">
        <div ref={ref} className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative">
              <img src={drAmanImg} alt="Dr. Aman - Gut Health Specialist" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl max-w-[200px]">
              <p className="text-sm font-bold text-primary">15+ Years</p>
              <p className="text-xs text-foreground/70">Clinical Excellence in Gastroenterology</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl mb-8 text-foreground">Meet Dr. Aman</h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Dr. Aman has spent over a decade treating thousands of patients across India, moving beyond temporary prescriptions to develop the <strong className="text-foreground">Healing Miles Correction Model</strong>—a structured, evidence-based approach to permanent gut recovery.
            </p>
            <ul className="space-y-4 mb-10">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-primary">✔</span>
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Book a Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
