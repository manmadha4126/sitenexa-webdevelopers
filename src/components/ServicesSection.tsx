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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span
            className={`inline-block bg-[hsl(200,80%,50%)] text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            What We Do
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-accent whitespace-nowrap ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Services That Accelerate Your Growth
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative p-8 rounded-lg bg-white border border-[hsl(210,20%,90%)] hover:scale-105 hover:shadow-2xl hover:shadow-[hsl(200,80%,50%)]/15 transition-all duration-300 cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-[hsl(205,60%,92%)] group-hover:bg-[hsl(200,80%,50%)]/15 flex items-center justify-center mb-6 transition-colors duration-200">
                <s.icon size={26} className="text-[hsl(210,60%,35%)] group-hover:text-[hsl(200,80%,50%)]" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[hsl(210,60%,15%)] transition-colors duration-200">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-200">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
