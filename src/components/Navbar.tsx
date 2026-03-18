import { useEffect, useState } from "react";

const Logo = () => (
  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Dr. Aman" },
  { href: "#webinar", label: "Webinar" },
  { href: "#consultation", label: "Consultation" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 lg:px-12 flex justify-between items-center ${
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-md shadow-2xl"
          : "py-6"
      }`}
    >
      <div className="flex items-center gap-2">
        <Logo />
        <span className="font-display text-2xl font-bold tracking-tight text-foreground">
          Healing Miles
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
        {navLinks.map((l) => (
          <button
            key={l.href}
            onClick={() => scrollTo(l.href)}
            className="hover:text-primary transition-colors"
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollTo("#consultation")}
        className="hidden md:block btn-primary text-sm"
      >
        Book ₹799 Consultation
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md md:hidden flex flex-col p-6 gap-4 border-t border-border">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-foreground/80 hover:text-primary text-left text-lg"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo("#consultation")} className="btn-primary text-sm mt-2">
            Book ₹799 Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
