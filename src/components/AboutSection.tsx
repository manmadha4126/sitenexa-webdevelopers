import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Lightbulb, Users } from "lucide-react";

const pillars = [
  { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead of trends, adopting cutting-edge technologies to deliver future-proof solutions." },
  { icon: Target, title: "Quality Obsessed", desc: "Every pixel and every line of code is crafted with precision — no shortcuts, no compromises." },
  { icon: Users, title: "Client-Centric", desc: "Your goals become ours. We collaborate closely to ensure every deliverable exceeds expectations." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-light py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p
            className={`text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            About Us
          </p>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-accent mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Crafting Digital Excellence Since 2019
          </h2>
          <p
            className={`text-muted-foreground text-lg leading-relaxed ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Sitenexa is a digital agency driven by a passion for building impactful digital experiences. We combine design thinking with technical expertise to help businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group p-8 rounded-lg border border-border bg-secondary/50 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                <p.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
