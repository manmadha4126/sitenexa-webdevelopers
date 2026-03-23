import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const row1 = [
  { quote: "Sitenexa completely transformed our online presence. The website they built for us looks phenomenal and has directly increased our lead generation by 40%.", name: "Priya Sharma", role: "Founder, BrightEdge Marketing", initials: "PS", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { quote: "Working with the Sitenexa team felt like a true partnership. They understood our vision instantly and delivered a product that exceeded all our expectations.", name: "Rahul Menon", role: "CTO, CloudNest Technologies", initials: "RM", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { quote: "Their attention to detail is unmatched. Every interaction, every animation — it all feels intentional. Our customers constantly compliment the design.", name: "Ananya Desai", role: "Director, Luxora Interiors", initials: "AD", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { quote: "Fast turnaround, professional communication, and a final product that speaks for itself. I've recommended Sitenexa to three other businesses already.", name: "Vikram Patel", role: "CEO, TradeSync Solutions", initials: "VP", avatar: "https://randomuser.me/api/portraits/men/75.jpg" },
  { quote: "The team at Sitenexa brought a level of creativity and precision we hadn't experienced before. Our e-commerce conversion rate jumped 35% after launch.", name: "Meera Kapoor", role: "Head of Digital, StyleVault", initials: "MK", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
  { quote: "From concept to deployment, Sitenexa handled everything with remarkable professionalism. They truly understand the intersection of design and business strategy.", name: "Arjun Nair", role: "Managing Partner, Pinnacle Advisors", initials: "AN", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
];

const row2 = [
  { quote: "We needed a complex dashboard built in record time. Sitenexa delivered ahead of schedule with a polished UI that our internal team absolutely loves.", name: "Deepa Iyer", role: "VP Engineering, DataForge", initials: "DI", avatar: "https://randomuser.me/api/portraits/women/52.jpg" },
  { quote: "Sitenexa doesn't just build websites — they build experiences. Our bounce rate dropped by half after the redesign they did for us.", name: "Karthik Reddy", role: "Founder, GreenLeaf Organics", initials: "KR", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { quote: "What impressed me most was their post-launch support. They didn't just deliver and disappear — they've been a true partner in our growth.", name: "Sanya Gupta", role: "COO, UrbanNest Realty", initials: "SG", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { quote: "Their design sensibility is on another level. The website they created feels premium, modern, and perfectly aligned with our brand identity.", name: "Rohan Bhatia", role: "Creative Director, Lumino Studios", initials: "RB", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
  { quote: "Sitenexa helped us migrate from an outdated platform to a blazing-fast modern stack. The performance improvement was night and day.", name: "Nisha Verma", role: "CTO, FinEdge Technologies", initials: "NV", avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
  { quote: "Outstanding quality at a fair price. Sitenexa proved that you don't need a massive budget to get world-class digital work.", name: "Amit Joshi", role: "Founder, CraftBrew Co.", initials: "AJ", avatar: "https://randomuser.me/api/portraits/men/64.jpg" },
];

const TestimonialCard = ({ t }: { t: typeof row1[0] }) => (
  <div className="flex-shrink-0 w-[380px] p-8 rounded-lg bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)]">
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} size={16} className="fill-[hsl(45,100%,51%)] text-[hsl(45,100%,51%)]" />
      ))}
    </div>
    <p className="text-white/80 leading-relaxed mb-6 italic text-sm">"{t.quote}"</p>
    <div className="flex items-center gap-3">
      <img
        src={t.avatar}
        alt={t.name}
        className="w-10 h-10 rounded-full object-cover border-2 border-[hsl(200,80%,50%)]"
        loading="lazy"
      />
      <div>
        <div className="font-semibold text-sm text-white">{t.name}</div>
        <div className="text-white/50 text-xs">{t.role}</div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="section-light py-12 lg:py-16 overflow-hidden" ref={ref}>
      <div className="container mb-8">
        <div className="text-center max-w-2xl mx-auto">
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
      </div>

      {/* Row 1 — scrolls right to left */}
      <div className={`mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
        <div className="flex gap-6 animate-scroll-left">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left to right */}
      <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
        <div className="flex gap-6 animate-scroll-right">
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
