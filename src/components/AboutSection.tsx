import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LayoutTemplate, Target, Smartphone, Search, Zap, Wrench } from "lucide-react";

const features = [
  { icon: LayoutTemplate, title: "Custom Layouts", desc: "Unique digital architectures coded specifically to communicate your professional brand identity." },
  { icon: Target, title: "Conversion Focussed", desc: "Strategic UI/UX mapping designed to turn casual site visitors into committed long-term clients." },
  { icon: Smartphone, title: "Responsive Grid", desc: "Fluid development ensuring your portfolio remains visually stunning across all device dimensions." },
  { icon: Search, title: "Advanced SEO", desc: "Built-in structural optimization to help your creative work reach its target audience organically." },
  { icon: Zap, title: "Speed & Motion", desc: "Lightning-fast performance coupled with meaningful interactive animations for a premium user feel." },
  { icon: Wrench, title: "Full-Stack Maker", desc: "End-to-end expertise providing a seamless bridge from conceptual design to robust technical launch." },
];

const cardStyles = [
  // 1, 3, 5 — light ashen / coal black
  "bg-[hsl(0,0%,25%)] border border-[hsl(0,0%,32%)] text-white",
  // 2, 4, 6 — light blue
  "bg-[hsl(210,50%,95%)] border border-[hsl(210,40%,88%)] text-[hsl(210,60%,15%)]",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-light py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mb-16">
          <span
            className={`inline-block bg-[hsl(200,80%,50%)] text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            About Us
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[hsl(210,60%,15%)] mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Tailored Digital Excellence
          </h2>
          <p
            className={`text-muted-foreground text-lg leading-relaxed ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Sitenexa is a next generation web solutions driven by a passion for building impactful digital experiences. We combine design thinking with technical expertise to help businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const isDark = i % 2 === 0;
            return (
              <div
                key={f.title}
                className={`group p-8 rounded-2xl ${cardStyles[i % 2]} hover:scale-105 hover:shadow-xl hover:border-[hsl(200,80%,50%)]/50 transition-all duration-300 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${300 + i * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${isDark ? "bg-white/15" : "bg-[hsl(205,60%,92%)]"} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  <f.icon size={26} className={isDark ? "text-white" : "text-[hsl(210,60%,35%)]"} />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className={`leading-relaxed text-sm ${isDark ? "text-white/70" : "text-muted-foreground"}`}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
