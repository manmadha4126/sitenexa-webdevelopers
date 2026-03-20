import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-dark py-24 lg:py-32" ref={ref}>
      <div className="container text-center max-w-3xl mx-auto">
        <h2
          className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-accent ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Let's Build Something Great Together
        </h2>
        <p
          className={`text-dark-muted text-lg sm:text-xl leading-relaxed mb-10 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "150ms" }}
        >
          Ready to take your digital presence to the next level? Let's talk about your project and bring your vision to life.
        </p>
        <a
          href="#contact"
          className={`inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md text-base font-semibold tracking-wide hover:opacity-90 transition-opacity active:scale-[0.97] ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          Start Your Project
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
