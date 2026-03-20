import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  { img: project1, title: "LuxeCart E-Commerce", category: "Web Development", desc: "A premium online shopping experience for a luxury accessories brand." },
  { img: project2, title: "DataPulse Dashboard", category: "Software Solution", desc: "Real-time analytics dashboard for a SaaS analytics platform." },
  { img: project3, title: "VitalTrack App", category: "Mobile App Design", desc: "Health & fitness tracking app with intuitive progress visualization." },
  { img: project4, title: "Savora Restaurant", category: "Website Design", desc: "Elegant digital presence for a fine dining restaurant chain." },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="portfolio" className="section-light py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className={`text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Our Work
          </p>
          <h2
            className={`font-display text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,6%)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-accent text-xs uppercase tracking-widest mb-1">{p.category}</p>
                  <h3 className="text-primary-foreground text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-primary-foreground/60 text-sm">{p.desc}</p>
                </div>
                <ExternalLink size={18} className="text-primary-foreground/60 ml-auto self-end" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
