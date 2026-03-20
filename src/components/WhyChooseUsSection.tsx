import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, TrendingUp, IndianRupee, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    desc: "We respect deadlines. Most projects ship within 2–4 weeks without sacrificing quality.",
    gradient: "from-[hsl(240,70%,55%)] to-[hsl(270,80%,45%)]",
    iconBg: "bg-white/20",
  },
  {
    icon: TrendingUp,
    title: "Modern Design Standards",
    desc: "We follow current design trends and best practices to keep your brand looking fresh and competitive.",
    gradient: "from-[hsl(170,65%,45%)] to-[hsl(200,75%,50%)]",
    iconBg: "bg-white/20",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. Clear proposals with fair pricing that fits your budget.",
    gradient: "from-[hsl(30,90%,55%)] to-[hsl(350,80%,55%)]",
    iconBg: "bg-white/20",
  },
  {
    icon: HeartHandshake,
    title: "Lasting Partnerships",
    desc: "We don't just deliver and disappear — we build long-term relationships with ongoing support.",
    gradient: "from-[hsl(280,70%,55%)] to-[hsl(320,75%,50%)]",
    iconBg: "bg-white/20",
  },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-dark py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <span
            className={`inline-block bg-[hsl(200,80%,50%)] text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Why Sitenexa
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white whitespace-nowrap ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Built Different. Built Better. Built to Perform
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group relative rounded-3xl bg-gradient-to-b ${r.gradient} p-8 text-white overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              {/* Top icon circle */}
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <r.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{r.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">{r.desc}</p>

              <button className="mt-auto inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/30 transition-colors duration-200 active:scale-95">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
