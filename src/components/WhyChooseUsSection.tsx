import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShoppingCart, Landmark, Clock, HeartHandshake } from "lucide-react";

const reasons = [
{
  icon: ShoppingCart,
  title: "Lightning Fast Delivery",
  desc: "We respect deadlines. Most projects ship within 2–4 weeks without sacrificing quality.",
  cardBg: "bg-[hsl(245,100%,40%)]",
  iconColor: "text-[hsl(245,100%,50%)]"
},
{
  icon: Landmark,
  title: "Modern Design Standards",
  desc: "We follow current design trends and best practices to keep your brand looking fresh and competitive.",
  cardBg: "bg-gradient-to-b from-[hsl(160,60%,70%)] to-[hsl(160,50%,55%)]",
  iconColor: "text-[hsl(170,65%,40%)]"
},
{
  icon: Clock,
  title: "Transparent Pricing",
  desc: "No hidden fees, no surprises. Clear proposals with fair pricing that fits your budget.",
  cardBg: "bg-[hsl(30,95%,55%)]",
  iconColor: "text-[hsl(30,95%,55%)]"
},
{
  icon: HeartHandshake,
  title: "Lasting Partnerships",
  desc: "We don't just deliver and disappear — we build long-term relationships with ongoing support.",
  cardBg: "bg-gradient-to-b from-[hsl(280,70%,55%)] to-[hsl(320,75%,50%)]",
  iconColor: "text-[hsl(280,70%,55%)]"
}];


const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-dark py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <span className="bg-lime-600">



            
            Why Sitenexa
          </span>
          <h2
            className={`font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white whitespace-nowrap ${
            isVisible ? "animate-fade-up" : "opacity-0"}`
            }
            style={{ animationDelay: "100ms" }}>
            
            Built Different. Built Better. Built to Perform
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) =>
          <div
            key={r.title}
            className={`group relative rounded-3xl ${r.cardBg} pt-14 pb-8 px-8 text-white overflow-visible hover:scale-105 transition-transform duration-300 cursor-pointer ${
            isVisible ? "animate-fade-up" : "opacity-0"}`
            }
            style={{ animationDelay: `${200 + i * 100}ms` }}>
            
              {/* Icon circle overlapping card top */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                <r.icon size={28} className={r.iconColor} />
              </div>

              <h3 className="text-xl font-bold mb-3 mt-2 text-center">{r.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 text-center">{r.desc}</p>

              <div className="text-center">
                <button className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/30 transition-colors duration-200 active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default WhyChooseUsSection;