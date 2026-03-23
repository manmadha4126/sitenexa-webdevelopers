import heroBg from "@/assets/hero-office-bg.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(220,20%,8%)]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        loading="eager" />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,12%)/60] via-transparent to-[hsl(260,30%,10%)/40]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,6%)] via-transparent to-transparent" />

      {/* Logo above SITENEXA name on right side */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-20 pointer-events-none hidden lg:flex">
        <img src={logo} alt="" className="w-24 h-24" />
        <span className="font-display text-white text-6xl font-bold tracking-[0.2em] [writing-mode:vertical-lr]">SITENEXA</span>
      </div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="container relative z-10 pt-36 pb-28">
        <div className="max-w-4xl">
          <h1
            className="text-5xl sm:text-6xl leading-[0.95] tracking-tight mb-8 opacity-0 animate-fade-up text-white lg:text-6xl font-serif font-extrabold"
            style={{ animationDelay: "400ms" }}>
            
            Web Development &
            <span className="block mt-2 text-slate-400">Software Solutions</span>
          </h1>

          <p
            className="text-[hsl(220,10%,65%)] text-lg sm:text-xl max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}>
            
            Sitenexa delivers next-generation web solutions — from stunning interfaces to scalable platforms — built to set your brand apart in a competitive digital landscape.
          </p>

          <div
            className="flex flex-wrap gap-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms" }}>
            
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] transition-shadow duration-300 active:scale-[0.97]">
              
              Explore Our Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/5 hover:border-white/25 transition-all duration-300 active:scale-[0.97]">
              
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;