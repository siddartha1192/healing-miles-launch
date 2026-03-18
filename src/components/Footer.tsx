import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (route: string) => {
    if (route.startsWith("/#")) {
      const hash = route.slice(1);
      if (location.pathname === "/") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      navigate(route);
      window.scrollTo({ top: 0 });
    }
  };

  const links = [
    { label: "Home", route: "/" },
    { label: "About", route: "/#about" },
    { label: "Webinar", route: "/webinar" },
    { label: "Consultation", route: "/consultation" },
    { label: "Terms", route: "/terms" },
    { label: "Privacy", route: "/privacy" },
    { label: "Cancellation", route: "/cancellation" },
  ];

  return (
    <footer className="py-8 border-t border-foreground/10 bg-secondary">
      <div className="container mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          {/* Logo */}
          <button onClick={() => handleNav("/")} className="flex items-center gap-2 shrink-0">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="font-display text-base font-bold text-foreground">Healing Miles</span>
          </button>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map(l => (
              <button key={l.route} onClick={() => handleNav(l.route)} className="text-xs text-foreground/45 hover:text-primary transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 text-xs text-foreground/45 shrink-0">
            <a href="mailto:ask@healingmiles.com" className="hover:text-primary transition-colors">ask@healingmiles.com</a>
            <span>·</span>
            <a href="tel:+918920926041" className="hover:text-primary transition-colors">+91-8920926041</a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-5 border-t border-foreground/5 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[10px] text-foreground/25 max-w-xl">
            Disclaimer: For educational purposes only. Not a substitute for professional medical advice.
          </p>
          <p className="text-[10px] text-foreground/25 shrink-0">© 2026 Healing Miles. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
