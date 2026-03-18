import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect personal information such as your name, email address, phone number, and health-related details when you register for webinars, consultations, or programs. This information is collected solely for the purpose of providing our services, improving user experience, and communicating relevant updates.",
  },
  {
    title: "How We Use Your Data",
    body: "All personal data shared with Healing Miles is kept confidential and is not sold, rented, or shared with third parties for marketing purposes. Information may be shared only with internal team members or service providers strictly for operational purposes such as consultations, support, or communication.",
  },
  {
    title: "Data Security",
    body: "We implement appropriate security measures to protect your data from unauthorized access, misuse, or disclosure. While we take all reasonable precautions, no digital system is completely secure, and users are advised to share information responsibly.",
  },
  {
    title: "Cookies & Tracking",
    body: "Our website may use cookies or similar technologies to enhance user experience, track website performance, and understand user behavior. By using our website, you consent to the use of such technologies.",
  },
  {
    title: "Your Rights",
    body: "Users have the right to request access, correction, or deletion of their personal data by contacting our support team. We will make reasonable efforts to address such requests in a timely manner.",
  },
  {
    title: "Policy Updates",
    body: "Healing Miles reserves the right to update this privacy policy at any time. Continued use of our services after any updates implies acceptance of the revised policy.",
  },
];

const PrivacyPage = () => {
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
              Privacy Policy
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
            At <span className="text-foreground font-semibold">Healing Miles</span>, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. By using our website or services, you agree to the terms outlined in this privacy policy.
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
            <p className="text-foreground/60 text-sm mb-3">For any privacy concerns or data requests, reach out to us:</p>
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

export default PrivacyPage;
