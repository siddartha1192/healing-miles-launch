import { useReveal } from "@/hooks/use-reveal";

const benefits = [
  { title: "Root Cause Analysis", desc: "We identify the 'why' behind your symptoms." },
  { title: "30–45 Min 1:1 Session", desc: "Private Zoom consultation with Dr. Aman." },
  { title: "Personalised Roadmap", desc: "Customised diet and lifestyle correction plan." },
  { title: "Follow-up Guidance", desc: "Continued support after your session." },
];

export default function ConsultationBooking() {
  const { ref, visible } = useReveal();
  return (
    <section id="consultation" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div>
            <h2 className="text-3xl md:text-5xl mb-8 text-foreground">Book Your Personal Gut Health Consultation</h2>
            <p className="text-lg text-foreground/70 mb-8">Get a clinical diagnosis and a structured roadmap to recovery directly from Dr. Aman.</p>
            <ul className="space-y-6">
              {benefits.map((b, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 text-sm">✓</div>
                  <div>
                    <h4 className="font-bold text-foreground">{b.title}</h4>
                    <p className="text-sm text-foreground/60">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 md:p-10 lg:p-12 rounded-[40px]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-3xl font-bold text-foreground">₹799</span>
                <span className="text-lg text-foreground/40 line-through ml-2">₹1,499</span>
              </div>
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">47% OFF</span>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary" />
              <input type="tel" placeholder="Mobile Number" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary" />
              <select className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground/70 focus:outline-none focus:border-primary appearance-none">
                <option>Primary Issue: Chronic Acidity</option>
                <option>Primary Issue: IBS / Bloating</option>
                <option>Primary Issue: Constipation</option>
                <option>Primary Issue: Other</option>
              </select>
              <button type="submit" className="btn-primary w-full py-5 text-lg">Proceed to Payment</button>
            </form>
            <div className="mt-8 flex justify-between items-center text-foreground/40">
              <span className="text-[10px] font-bold uppercase tracking-widest">SSL Secured</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Razorpay</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Confidential</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">92% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
