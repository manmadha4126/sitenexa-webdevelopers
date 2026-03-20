import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Palette, Code2, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance, responsive websites built with modern frameworks that convert visitors into customers.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Intuitive, research-driven interfaces that delight users and create seamless digital journeys.",
  },
  {
    icon: Code2,
    title: "Software Solutions",
    desc: "Custom web and mobile applications engineered for scalability, security, and real business impact.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing technical support, updates, and optimization to keep your digital products running smoothly.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-dark py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className={`text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            What We Do
          </p>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-accent ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Services That Drive Growth
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative p-8 rounded-lg border border-primary-foreground/10 hover:border-accent/40 transition-all duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-200">
                <s.icon size={26} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
