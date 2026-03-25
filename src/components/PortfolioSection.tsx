import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import myProject1 from "@/assets/my-project-1.jpg";
import myProject2 from "@/assets/my-project-2.jpg";
import myProject3 from "@/assets/my-project-3.jpg";
import v2vImg from "@/assets/v2v-solutions.png";
import vikshanaImg from "@/assets/vikshana-matrimony.png";
import kalyanasuthraImg from "@/assets/kalyanasuthra-matrimony.png";
import { ExternalLink, Phone } from "lucide-react";

const projects = [
  { img: project1, title: "LuxeCart E-Commerce", category: "Web Development", desc: "Premium online shopping experience.", backDesc: "Built with React & Node.js. Features include real-time inventory, payment gateway integration, and responsive design." },
  { img: project2, title: "DataPulse Dashboard", category: "Software Solution", desc: "Real-time analytics platform.", backDesc: "Enterprise analytics with live data visualization, custom reports, role-based access, and API integrations." },
  { img: myProject1, title: "VitalTrack App", category: "Mobile App Design", desc: "Health & fitness tracking app.", backDesc: "Cross-platform mobile app with workout plans, nutrition tracking, progress charts, and wearable sync." },
  { img: project4, title: "Savora Restaurant", category: "Website Design", desc: "Fine dining digital presence.", backDesc: "Elegant restaurant website with online reservations, menu management, and Google Maps integration." },
];

const myProjects = [
  { img: myProject1, title: "FinFlow Analytics", category: "SaaS Dashboard", desc: "Enterprise analytics dashboard with real-time data visualization." },
  { img: myProject2, title: "PayWave Mobile", category: "Fintech App", desc: "Mobile banking application with seamless payments." },
  { img: v2vImg, title: "V2V Solutions", category: "Cab Services", desc: "Smart cab booking platform. Website: v2vsolutions.online" },
  { img: project1, title: "HealthBridge Portal", category: "HealthTech", desc: "Patient management system with telemedicine features." },
  { img: project2, title: "TravelNest Booking", category: "Travel & Hospitality", desc: "Booking platform with dynamic pricing and reviews." },
  { img: project4, title: "CloudSync CRM", category: "Business Software", desc: "Customer relationship management with AI insights." },
  { img: vikshanaImg, title: "Vikshana Matrimony", category: "Matrimony Platform", desc: "Modern matchmaking platform with verified profiles." },
  { img: myProject3, title: "FitPulse Tracker", category: "Health & Wellness", desc: "Fitness tracking app with personalized workout plans." },
  { img: kalyanasuthraImg, title: "Kalyanasuthra Matrimony", category: "Matrimony Platform", desc: "Traditional matchmaking with a modern approach." },
  { img: project3, title: "CodeNest IDE", category: "Developer Tools", desc: "Cloud-based code editor with real-time collaboration." },
];

const FlipCard = ({ p, i, isVisible }: { p: typeof projects[0]; i: number; isVisible: boolean }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`group cursor-pointer ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${200 + i * 80}ms`, perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div className="relative overflow-hidden rounded-lg border-2 border-[hsl(210,20%,85%)] hover:border-[hsl(200,80%,50%)] transition-all duration-300" style={{ backfaceVisibility: "hidden" }}>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="p-4 bg-white">
            <p className="text-accent text-xs uppercase tracking-widest mb-1 font-semibold">{p.category}</p>
            <h3 className="text-[hsl(210,60%,10%)] text-base font-semibold mb-0.5">{p.title}</h3>
            <p className="text-muted-foreground text-xs">{p.desc}</p>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={16} className="text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-lg border-2 border-[hsl(200,80%,50%)] bg-[hsl(210,60%,10%)] text-white p-6 flex flex-col justify-center items-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-bold mb-2">{p.title}</h3>
          <p className="text-xs uppercase tracking-widest text-accent mb-4">{p.category}</p>
          <p className="text-white/80 text-sm leading-relaxed">{p.backDesc}</p>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="portfolio" className="section-light py-24 lg:py-32" ref={ref}>
      <div className="container">
        {/* Project Types heading - centered */}
        <div className="mb-16 text-center">
          <span
            className={`inline-block text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 backdrop-blur-md bg-[hsl(200,80%,50%)]/15 border border-white/20 shadow-lg shadow-[hsl(200,80%,50%)]/10 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Our Work
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[hsl(210,60%,10%)] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Project Types
          </h2>
          <p
            className={`mt-4 text-[hsl(210,10%,45%)] text-base max-w-2xl mx-auto leading-relaxed ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            We built a smart solution. Check out our portfolio and understand our skills, creativity and approach.
          </p>
        </div>

        {/* 4 flip cards - hover to flip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <FlipCard key={p.title} p={p} i={i} isVisible={isVisible} />
          ))}
        </div>

        {/* CTA buttons */}
        <div className={`flex flex-wrap justify-center gap-5 mt-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "500ms" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[hsl(200,80%,50%)] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Let's Connect With Us
          </a>
          <a
            href="tel:+918074666415"
            className="inline-flex items-center gap-2 bg-[hsl(30,95%,55%)] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone size={16} />
            Book a Call
          </a>
        </div>

        {/* My Projects heading */}
        <div className="mt-24 mb-10">
          <h2
            className={`font-display text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[hsl(210,60%,10%)] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "600ms" }}
          >
            Explore Our Projects Crafted by Sitenexa
          </h2>
        </div>

        {/* Auto-scrolling project cards - slower speed, 10 projects */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll-left-medium" style={{ width: 'max-content' }}>
            {[...myProjects, ...myProjects, ...myProjects].map((p, i) => (
              <div
                key={`mp-${i}`}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-border hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300 flex-shrink-0 w-[300px]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">{p.category}</p>
                  <h3 className="text-base font-semibold mb-1 text-[hsl(210,60%,10%)]">{p.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
