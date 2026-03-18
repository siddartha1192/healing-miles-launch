import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";

const RAZORPAY_KEY = "rzp_live_SSqDEm9ORqDeII"; // ← replace with your Key ID
const AMOUNT_PAISE = 79900; // ₹799 in paise
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";

const benefits = [
  { title: "Root Cause Analysis", desc: "We identify the 'why' behind your symptoms." },
  { title: "30–45 Min 1:1 Session", desc: "Private Zoom consultation with Dr. Aman." },
  { title: "Personalised Roadmap", desc: "Customised diet and lifestyle correction plan." },
  { title: "Follow-up Guidance", desc: "Continued support after your session." },
];

// Generate 30-min slots from 9:00 AM to 5:00 PM
const TIME_SLOTS = Array.from({ length: 17 }, (_, i) => {
  const totalMins = 9 * 60 + i * 30;
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const display = `${h > 12 ? h - 12 : h}:${m === 0 ? "00" : m} ${ampm}`;
  return display;
}); // 9:00 AM … 5:00 PM

export default function ConsultationBooking() {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("Primary Issue: Chronic Acidity");
  const [paying, setPaying] = useState(false);

  function handlePayment(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !phone || !date || !time) {
      alert("Please fill all fields and select a date & time slot.");
      return;
    }
    setPaying(true);
    const options = {
      key: RAZORPAY_KEY,
      amount: AMOUNT_PAISE,
      currency: "INR",
      name: "Healing Miles",
      description: "1:1 Gut Health Consultation with Dr. Aman",
      image: "https://res.cloudinary.com/djx5oiwkz/image/upload/v1773863596/whatsapp-media/file_cnj1ju.png",
      prefill: { name, email, contact: phone },
      notes: { issue, date: formattedDate ?? "", time: time ?? "" },
      theme: { color: "hsl(150, 35%, 40%)" },
      handler: () => {
        setPaying(false);
        navigate("/thank-you?type=consultation");
        window.scrollTo({ top: 0 });
      },
      modal: {
        ondismiss: () => setPaying(false),
      },
    };
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  }
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [calOpen, setCalOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formattedDate = date
    ? date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <section id="consultation" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {/* Left — benefits */}
          <div>
            <h2 className="text-3xl md:text-5xl mb-8 text-foreground">Book Your Personal Gut Health Consultation</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Get a clinical diagnosis and a structured roadmap to recovery directly from Dr. Aman.
            </p>
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

          {/* Right — form */}
          <div className="glass-card p-6 md:p-10 lg:p-12 rounded-[40px]">
            {/* Price */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-3xl font-bold text-foreground">₹799</span>
                <span className="text-lg text-foreground/40 line-through ml-2">₹1,499</span>
              </div>
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">47% OFF</span>
            </div>

            <form className="space-y-4" onSubmit={handlePayment}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
              />
              <select
                value={issue}
                onChange={e => setIssue(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-foreground/70 focus:outline-none focus:border-primary appearance-none"
              >
                <option>Primary Issue: Chronic Acidity</option>
                <option>Primary Issue: IBS / Bloating</option>
                <option>Primary Issue: Constipation</option>
                <option>Primary Issue: Other</option>
              </select>

              {/* ── Date Picker ── */}
              <div className="rounded-xl border border-foreground/10 overflow-hidden">
                {/* trigger row */}
                <button
                  type="button"
                  onClick={() => setCalOpen((o) => !o)}
                  className="w-full flex items-center gap-2 px-4 py-3.5 bg-foreground/5 hover:bg-foreground/8 transition-colors"
                >
                  <CalendarDays className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                  <span className={`flex-1 text-left text-sm font-medium ${date ? "text-foreground" : "text-foreground/40"}`}>
                    {formattedDate ?? "Select a Date"}
                  </span>
                  <span className={`text-foreground/30 text-xs transition-transform duration-200 ${calOpen ? "rotate-180" : ""}`}>▼</span>
                </button>

                {/* collapsible calendar */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: calOpen ? "340px" : "0px" }}
                >
                  <div className="flex justify-center py-2 border-t border-foreground/8 bg-foreground/3">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => { setDate(d); setTime(null); setCalOpen(false); setTimeOpen(true); }}
                      disabled={(d) => d < today || d.getDay() === 0}
                      className="scale-[0.92] origin-top"
                    />
                  </div>
                </div>
              </div>

              {/* ── Time Slots ── */}
              {date && (
                <div className="rounded-xl border border-foreground/10 overflow-hidden">
                  {/* trigger row */}
                  <button
                    type="button"
                    onClick={() => setTimeOpen((o) => !o)}
                    className="w-full flex items-center gap-2 px-4 py-3.5 bg-foreground/5 hover:bg-foreground/8 transition-colors"
                  >
                    <Clock className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                    <span className={`flex-1 text-left text-sm font-medium ${time ? "text-foreground" : "text-foreground/40"}`}>
                      {time ?? "Select a Time Slot"}
                    </span>
                    <span className="text-foreground/30 text-xs ml-auto mr-2">9 AM – 5 PM</span>
                    <span className={`text-foreground/30 text-xs transition-transform duration-200 ${timeOpen ? "rotate-180" : ""}`}>▼</span>
                  </button>

                  {/* collapsible slots */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: timeOpen ? "220px" : "0px" }}
                  >
                    <div className="p-4 border-t border-foreground/8 bg-foreground/3">
                      <div className="grid grid-cols-4 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => { setTime(slot); setTimeOpen(false); }}
                            className={`text-xs py-2 px-1 rounded-lg border font-medium transition-all duration-150
                              ${time === slot
                                ? "bg-primary text-primary-foreground border-primary shadow-[0_2px_10px_hsl(var(--primary)/0.3)]"
                                : "border-foreground/10 text-foreground/60 hover:border-primary/40 hover:text-foreground bg-background/50"
                              }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* selected summary */}
              {date && time && (
                <div className="flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-lg px-4 py-3 text-sm text-primary font-medium">
                  <CalendarDays className="w-4 h-4 shrink-0" />
                  {formattedDate} · {time}
                </div>
              )}

              <button
                type="submit"
                disabled={paying}
                className="btn-primary w-full py-5 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {paying ? "Opening Payment..." : "Proceed to Payment — ₹799"}
              </button>
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
