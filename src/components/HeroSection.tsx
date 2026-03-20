import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(220,20%,8%)]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="eager"
      />
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,12%)/80] via-transparent to-[hsl(260,30%,10%)/60]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,6%)] via-transparent to-transparent" />

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="container relative z-10 pt-36 pb-28">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.15em]">
              Next Generation Web Solutions
            </span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 opacity-0 animate-fade-up text-white"
            style={{ animationDelay: "400ms" }}
          >
            Transforming Ideas Into
            <span className="block text-accent mt-2">Powerful Brands</span>
          </h1>

          <p
            className="text-[hsl(220,10%,65%)] text-lg sm:text-xl max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            We are Sitenexa — a creative studio that designs, develops, and delivers digital products engineered to dominate your market and elevate your brand.
          </p>

          <div
            className="flex flex-wrap gap-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] transition-shadow duration-300 active:scale-[0.97]"
            >
              Explore Our Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/5 hover:border-white/25 transition-all duration-300 active:scale-[0.97]"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-24 pt-10 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "1000ms" }}
        >
          {[
            { num: "127+", label: "Projects Delivered" },
            { num: "98%", label: "Client Retention" },
            { num: "4.9", label: "Average Rating" },
            { num: "6+", label: "Years of Experience" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-display font-bold text-accent tabular-nums">{s.num}</div>
              <div className="text-[hsl(220,10%,50%)] text-sm mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
