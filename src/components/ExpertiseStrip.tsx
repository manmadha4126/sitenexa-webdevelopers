import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, BarChart3, Rocket, Settings } from "lucide-react";

const steps = [
  { icon: Search, title: "Project analysis", desc: "Research and strategy" },
  { icon: BarChart3, title: "Build strategy", desc: "Wireframe and design" },
  { icon: Rocket, title: "Launch and live", desc: "Development and scale" },
  { icon: Settings, title: "Maintenance", desc: "Maintaining strong" },
];

const ExpertiseStrip = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[hsl(220,15%,96%)] py-16 lg:py-20" ref={ref}>
      <div className="container">
        <div className="mb-10">
          <span className={`text-[hsl(240,60%,55%)] text-sm italic font-medium ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            Expertise
          </span>
          <h2
            className={`font-display text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-[hsl(220,30%,15%)] mt-2 max-w-2xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}
          >
            We Build impactful solutions through web design and development.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col items-center text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <s.icon size={48} strokeWidth={1.2} className="text-[hsl(220,20%,25%)]" />
              </div>
              <h3 className="text-base font-bold text-[hsl(220,30%,15%)] mb-1">{s.title}</h3>
              <p className="text-sm text-[hsl(220,10%,50%)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseStrip;
