import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import myProject1 from "@/assets/my-project-1.jpg";
import myProject2 from "@/assets/my-project-2.jpg";
import myProject3 from "@/assets/my-project-3.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  { img: project1, title: "LuxeCart E-Commerce", category: "Web Development", desc: "Premium online shopping experience." },
  { img: project2, title: "DataPulse Dashboard", category: "Software Solution", desc: "Real-time analytics platform." },
  { img: project3, title: "VitalTrack App", category: "Mobile App Design", desc: "Health & fitness tracking app." },
  { img: project4, title: "Savora Restaurant", category: "Website Design", desc: "Fine dining digital presence." },
];

const myProjects = [
  { img: myProject1, title: "FinFlow Analytics", category: "SaaS Dashboard", desc: "Enterprise analytics dashboard with real-time data visualization and reporting tools." },
  { img: myProject2, title: "PayWave Mobile", category: "Fintech App", desc: "Mobile banking application with seamless payments and financial tracking." },
  { img: myProject3, title: "EduSpark Platform", category: "EdTech Portal", desc: "Online learning platform with interactive courses and student management." },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="portfolio" className="section-light py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block bg-[hsl(200,80%,50%)] text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Our Work
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-accent ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Selected Projects
          </h2>
        </div>

        {/* 4 cards in one horizontal line */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,6%)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <p className="text-accent text-xs uppercase tracking-widest mb-1">{p.category}</p>
                  <h3 className="text-primary-foreground text-base font-semibold mb-0.5">{p.title}</h3>
                  <p className="text-primary-foreground/60 text-xs">{p.desc}</p>
                </div>
                <ExternalLink size={16} className="text-primary-foreground/60 ml-auto self-end shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* My Projects heading */}
        <div className="text-center mt-24 mb-14">
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-accent ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "600ms" }}
          >
            My Projects
          </h2>
        </div>

        {/* 3 My Project cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {myProjects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-xl cursor-pointer border border-border hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${700 + i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">{p.category}</p>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
