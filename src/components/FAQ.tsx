import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  { q: "Is the webinar really free?", a: "Yes, the webinar is 100% free. It is our way of educating the public about the root causes of gut health before they commit to a clinical program." },
  { q: "What happens during the consultation?", a: "Dr. Aman will review your medical history, current symptoms, and lifestyle to identify the root cause. You will receive a structured roadmap for recovery." },
  { q: "How long is the consultation?", a: "Each session lasts between 30 to 45 minutes to ensure all your concerns are addressed thoroughly." },
  { q: "Will I get a recording?", a: "Yes, registered participants will receive a recording of the webinar within 24 hours of the session." },
  { q: "Is payment secure?", a: "Absolutely. We use Razorpay for all transactions, which is PCI-DSS compliant and SSL secured." },
  { q: "Can I reschedule?", a: "Yes, you can reschedule your consultation up to 24 hours before the appointment at no extra cost." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, visible } = useReveal();

  return (
    <section className="py-24 md:py-32 section-dark">
      <div className="container mx-auto max-w-3xl">
        <h2
          ref={ref}
          className={`text-3xl md:text-5xl text-center mb-16 text-foreground transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="glass-card p-6 rounded-2xl cursor-pointer"
            >
              <div className="flex justify-between items-center font-bold text-foreground">
                <span>{f.q}</span>
                <span className="text-primary text-xl ml-4 shrink-0">{openIndex === i ? "−" : "+"}</span>
              </div>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? "200px" : "0", opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="text-foreground/70 text-sm pt-4">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
