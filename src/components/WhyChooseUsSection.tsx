import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, TrendingUp, IndianRupee, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast Delivery", desc: "We respect deadlines. Most projects ship within 2–4 weeks without sacrificing quality.", num: "01" },
  { icon: TrendingUp, title: "Modern Design Standards", desc: "We follow current design trends and best practices to keep your brand looking fresh and competitive.", num: "02" },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden fees, no surprises. Clear proposals with fair pricing that fits your budget.", num: "03" },
  { icon: HeartHandshake, title: "Lasting Partnerships", desc: "We don't just deliver and disappear — we build long-term relationships with ongoing support.", num: "04" },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[hsl(220,25%,10%)] via-[hsl(240,20%,12%)] to-[hsl(260,25%,10%)]" ref={ref}>
      {/* Decorative orb */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[hsl(260,40%,30%)]/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span
            className={`inline-block bg-[hsl(200,80%,50%)] text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Why Sitenexa
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Built Different.{" "}
            <span className="text-accent">Built Better.</span>
          </h2>
          <p
            className={`text-[hsl(220,10%,55%)] text-lg leading-relaxed mt-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            We combine deep technical expertise with a genuine passion for great design. Every project is a chance to prove why leading businesses trust us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-accent/20 transition-all duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                  <r.icon size={22} className="text-accent" />
                </div>
                <div>
                  <span className="text-[hsl(220,10%,30%)] text-xs font-mono font-bold">{r.num}</span>
                  <h3 className="text-white font-semibold text-lg mt-1 mb-2">{r.title}</h3>
                  <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
