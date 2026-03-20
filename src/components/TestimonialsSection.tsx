import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Sitenexa completely transformed our online presence. The website they built for us looks phenomenal and has directly increased our lead generation by 40%.",
    name: "Priya Sharma",
    role: "Founder, BrightEdge Marketing",
    initials: "PS"
  },
  {
    quote: "Working with the Sitenexa team felt like a true partnership. They understood our vision instantly and delivered a product that exceeded all our expectations.",
    name: "Rahul Menon",
    role: "CTO, CloudNest Technologies",
    initials: "RM"
  },
  {
    quote: "Their attention to detail is unmatched. Every interaction, every animation — it all feels intentional. Our customers constantly compliment the design.",
    name: "Ananya Desai",
    role: "Director, Luxora Interiors",
    initials: "AD"
  },
  {
    quote: "Fast turnaround, professional communication, and a final product that speaks for itself. I've recommended Sitenexa to three other businesses already.",
    name: "Vikram Patel",
    role: "CEO, TradeSync Solutions",
    initials: "VP"
  }
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="section-light py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block bg-[hsl(200,80%,50%)] text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`font-display text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[hsl(210,60%,15%)] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-lg bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className="fill-[hsl(45,100%,51%)] text-[hsl(45,100%,51%)]" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(200,80%,50%)] flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
