export default function Footer() {
  return (
    <footer className="py-16 md:py-20 border-t border-foreground/10 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-display text-xl font-bold text-foreground">Healing Miles</span>
            </div>
            <p className="text-foreground/50 text-sm max-w-xs">
              Root cause gut health correction by Dr. Aman. 15+ years of clinical excellence in gastroenterology.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#webinar" className="hover:text-primary transition-colors">Free Webinar</a></li>
              <li><a href="#consultation" className="hover:text-primary transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li>contact@healingmiles.com</li>
              <li>+91-8920926041</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[10px] text-foreground/30 max-w-2xl uppercase tracking-tight">
            Disclaimer: This website is for educational purposes only and is not a substitute for professional medical advice. Always seek the advice of your physician or other qualified health provider.
          </p>
          <p className="text-[10px] text-foreground/30 uppercase tracking-tight">
            © 2026 Healing Miles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
