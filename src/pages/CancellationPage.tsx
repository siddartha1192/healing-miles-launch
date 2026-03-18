import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Consultation Cancellations",
    body: "For doctor consultations, users are required to cancel or reschedule their appointment at least 24 hours prior to the scheduled time. Any cancellation request made before this window will be eligible for rescheduling or refund as per the applicable policy. However, cancellations made within 24 hours of the scheduled consultation, missed appointments, or no-shows will be considered non-cancellable and non-refundable, as time slots are reserved in advance and cannot be reassigned at short notice.",
  },
  {
    title: "Program Enrollment Cancellations",
    body: "For program enrollments, cancellation requests will be considered only within the eligible refund period as defined in the refund policy. Once the program has progressed beyond the allowed cancellation window or the service has been initiated, cancellation will not be permitted. Since the program involves allocation of time, resources, and personalized guidance from the beginning, late cancellations cannot be accommodated.",
  },
  {
    title: "Non-Eligible Cancellation Grounds",
    body: "In cases where users are unable to continue due to personal reasons, schedule conflicts, or lack of participation, such situations will not qualify as valid grounds for cancellation or refund. Users are encouraged to review all program details and commitments before enrolling.",
  },
  {
    title: "Service Rescheduling by Healing Miles",
    body: "Healing Miles reserves the right to reschedule consultations, webinars, or services due to operational or unforeseen circumstances. In such cases, users will be informed in advance and provided with an alternative schedule or suitable resolution.",
  },
  {
    title: "How to Submit a Cancellation Request",
    body: "All cancellation requests must be made through the official support channels using registered details. Requests made through unofficial channels or without proper identification may not be considered valid.",
  },
  {
    title: "Acceptance of Policy",
    body: "By booking or enrolling in any Healing Miles service, you acknowledge that you have read, understood, and agreed to this cancellation policy.",
  },
];

const CancellationPage = () => {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)/0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        {/* Soft top glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[340px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: "hsl(var(--primary))" }}
        />

        <div className="container mx-auto relative z-10 max-w-3xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "hsl(var(--primary)/0.12)",
                color: "hsl(var(--primary))",
                border: "1px solid hsl(var(--primary)/0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
              Cancellation Policy
            </h1>
            <p className="text-foreground/50 text-sm">
              Last updated: March 2026 &nbsp;·&nbsp; Healing Miles
            </p>
          </div>

          {/* Intro */}
          <div
            className="rounded-2xl p-6 mb-8 text-foreground/70 text-base leading-relaxed"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
            }}
          >
            At <span className="text-foreground font-semibold">Healing Miles</span>, we aim to provide a structured and well-managed experience for all our users through scheduled consultations, webinars, and guided programs. By booking any service with us, you agree to the cancellation terms outlined below.
          </div>

          {/* Sections */}
          <div className="space-y-5">
            {sections.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "hsl(var(--primary)/0.12)",
                      color: "hsl(var(--primary))",
                      border: "1px solid hsl(var(--primary)/0.2)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h2>
                    <p className="text-foreground/65 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div
            className="mt-8 rounded-2xl p-6"
            style={{
              background: "hsl(var(--primary)/0.07)",
              border: "1px solid hsl(var(--primary)/0.2)",
            }}
          >
            <h3 className="font-display font-bold text-foreground mb-3">Contact Us</h3>
            <p className="text-foreground/60 text-sm mb-3">For cancellation-related queries or requests, reach out to us:</p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a
                href="mailto:ask@healingmiles.com"
                className="flex items-center gap-2 font-medium transition-colors hover:text-primary"
                style={{ color: "hsl(var(--primary))" }}
              >
                <span>✉</span> ask@healingmiles.com
              </a>
              <a
                href="tel:+918920926041"
                className="flex items-center gap-2 font-medium transition-colors hover:text-primary"
                style={{ color: "hsl(var(--primary))" }}
              >
                <span>📞</span> +91-8920926041
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CancellationPage;
