import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--surface-dark))/60] to-[hsl(var(--surface-dark))]" />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-3xl">
          <p
            className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Digital Agency
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            We Build Digital Experiences That Grow Your Business
          </h1>
          <p
            className="text-dark-muted text-lg sm:text-xl max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            From stunning websites to robust software solutions — we craft digital products that captivate users and drive results.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              View Our Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold tracking-wide hover:border-primary-foreground/40 transition-colors active:scale-[0.97]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 pt-10 border-t border-primary-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "1000ms" }}
        >
          {[
            { num: "127+", label: "Projects Delivered" },
            { num: "98%", label: "Client Retention" },
            { num: "4.9", label: "Average Rating" },
            { num: "6+", label: "Years of Experience" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-display font-bold text-accent tabular-nums">{s.num}</div>
              <div className="text-dark-muted text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
