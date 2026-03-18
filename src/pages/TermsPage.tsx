import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Nature of Services",
    body: "Healing Miles offers educational and guidance-based services, including webinars, consultations, and structured programs. These services are intended to provide general wellness support and are not a substitute for emergency or critical medical treatment. Users are advised to consult their primary healthcare provider for any serious or urgent medical conditions.",
  },
  {
    title: "User Responsibilities",
    body: "By enrolling in any program or consultation, you confirm that all information provided by you is accurate and complete. You agree to follow the guidance provided during the program to the best of your ability. Results may vary from person to person based on multiple factors including health condition, adherence, and lifestyle, and no specific outcomes are guaranteed.",
  },
  {
    title: "Payments & Refund Policy",
    body: "All payments made towards webinars, consultations, or programs are subject to the pricing and refund policies defined by Healing Miles. Once a service has been initiated or accessed, it is considered utilized. Misuse of services, inappropriate behavior, or violation of guidelines may result in suspension or termination of access without refund.",
  },
  {
    title: "Service Modifications",
    body: "Healing Miles reserves the right to modify, reschedule, or update any part of the service, including consultations or program structure, as required. We also reserve the right to update these terms at any time without prior notice, and continued use of our services constitutes acceptance of those changes.",
  },
  {
    title: "Intellectual Property & Prohibited Use",
    body: "Users agree not to misuse the platform, share confidential program materials, or engage in any activity that may harm the business or its operations. Any unauthorized reproduction, distribution, or misuse of Healing Miles content is strictly prohibited.",
  },
  {
    title: "Acceptance of Terms",
    body: "By continuing to use our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
  },
];

const TermsPage = () => {
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
              Terms &amp; Conditions
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
            At <span className="text-foreground font-semibold">Healing Miles</span>, we provide structured online gut health services designed to support individuals in improving their digestive health through guided consultations, nutrition advice, and lifestyle recommendations. By accessing or enrolling in any of our services, you agree to comply with and be bound by the terms outlined below.
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
            <p className="text-foreground/60 text-sm mb-3">For any queries regarding these terms, reach out to us:</p>
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

export default TermsPage;
