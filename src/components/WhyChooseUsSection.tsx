import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, TrendingUp, IndianRupee, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast Delivery", desc: "We respect deadlines. Most projects ship within 2–4 weeks without sacrificing quality." },
  { icon: TrendingUp, title: "Modern Design Standards", desc: "We follow current design trends and best practices to keep your brand looking fresh and competitive." },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden fees, no surprises. Clear proposals with fair pricing that fits your budget." },
  { icon: HeartHandshake, title: "Lasting Partnerships", desc: "We don't just deliver and disappear — we build long-term relationships with ongoing support." },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-dark py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className={`text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              Why Sitenexa
            </p>
            <h2
              className={`font-display text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6 ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              Built Different. Built Better.
            </h2>
            <p
              className={`text-dark-muted text-lg leading-relaxed ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              We combine deep technical expertise with a genuine passion for great design. Every project is a chance to prove why leading businesses trust us.
            </p>
          </div>

          <div className="space-y-6">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`flex gap-5 p-6 rounded-lg border border-primary-foreground/8 hover:border-accent/30 transition-colors duration-200 ${
                  isVisible ? "animate-slide-right" : "opacity-0"
                }`}
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <r.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{r.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
