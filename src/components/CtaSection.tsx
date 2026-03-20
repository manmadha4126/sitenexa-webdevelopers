import { useScrollReveal } from "@/hooks/useScrollReveal";

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 lg:py-20 px-4" ref={ref}>
      <div
        className={`container max-w-5xl mx-auto rounded-2xl py-20 px-8 text-center ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ background: "hsl(30, 100%, 55%)" }}
      >
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-10 text-[hsl(220,30%,15%)]">
          Ready to Elevate Your Digital
          <br />
          Presence with High-End Design?
        </h2>
        <a
          href="tel:+918074666415"
          className={`inline-block bg-white text-[hsl(30,100%,50%)] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.15em] hover:shadow-lg transition-all active:scale-[0.97] ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          Book a Strategy Call
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
