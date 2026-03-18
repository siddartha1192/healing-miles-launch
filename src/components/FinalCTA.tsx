export default function FinalCTA() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 text-center relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8 text-foreground">
          Take Control of Your <br />Gut Health Today
        </h2>
        <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
          Don't wait for symptoms to get worse. Start your healing journey with expert guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button onClick={() => scrollTo("#webinar")} className="btn-outline px-10 py-5">Join Free Webinar</button>
          <button onClick={() => scrollTo("#consultation")} className="btn-primary px-10 py-5">Book ₹799 Consultation</button>
        </div>
      </div>
    </section>
  );
}
