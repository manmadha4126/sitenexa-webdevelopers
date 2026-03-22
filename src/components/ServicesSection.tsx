import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Palette, Code2, Wrench, Users, ShoppingCart, Brain, Database, Phone } from "lucide-react";

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
  {
    icon: Users,
    title: "Customer CRM Development",
    desc: "Build powerful CRM systems that streamline customer relationships and boost retention rates.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Scalable online stores with seamless checkout, inventory management, and payment integrations.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "Integrate intelligent automation, chatbots, and machine learning to supercharge your business workflows.",
  },
  {
    icon: Database,
    title: "Cloud/Database Platforms",
    desc: "Robust cloud infrastructure and database solutions for reliable, scalable data management.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 bg-[hsl(192,70%,28%)]" ref={ref}>
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span
            className={`inline-block bg-white/20 text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            What We Do
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white whitespace-nowrap ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Services That Accelerate Your Growth
          </h2>
        </div>

        {/* Auto-scrolling cards */}
        <div className="overflow-hidden mb-12">
          <div className="flex gap-6 animate-scroll-left-fast">
            {[...services, ...services].map((s, i) => (
              <div
                key={`svc-${i}`}
                className="group relative p-8 rounded-lg bg-white border border-[hsl(210,20%,90%)] hover:scale-105 hover:shadow-2xl hover:shadow-white/15 transition-all duration-300 cursor-pointer flex-shrink-0 w-[280px]"
              >
                <div className="w-14 h-14 rounded-lg bg-[hsl(30,95%,92%)] group-hover:bg-[hsl(30,95%,85%)] flex items-center justify-center mb-6 transition-colors duration-200">
                  <s.icon size={26} className="text-[hsl(30,95%,50%)]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(210,60%,15%)] transition-colors duration-200">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-200">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Book a Call */}
        <div className="text-center">
          <a
            href="tel:+918074666415"
            className="inline-flex items-center gap-3 bg-white text-[hsl(192,70%,28%)] px-8 py-4 rounded-full text-base font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-[0.97]"
          >
            <Phone size={20} />
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
