import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send } from "lucide-react";

const AgencySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[hsl(220,15%,96%)] py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Large heading + badge */}
          <div>
            <h2
              className={`font-display text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-[hsl(220,35%,15%)] uppercase ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              
              Digital
              <br />
              Solution
            </h2>
            <div className="flex items-end gap-6 mt-2">
              {/* Rotating badge */}
              <div className={`relative w-24 h-24 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: "12s" }}>
                  <defs>
                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="8.5" fill="hsl(220,20%,40%)" letterSpacing="3">
                    <textPath href="#circlePath">
                      EXPERIENCE 08+ YEARS OF WORKING
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Send size={22} className="text-[hsl(220,30%,25%)]" />
                </div>
              </div>
              <h2
                className={`font-display text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-[hsl(220,35%,15%)] uppercase ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: "100ms" }}>
                
                ​Agency
              </h2>
            </div>
          </div>

          {/* Right: Description */}
          <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <p className="text-[hsl(220,10%,45%)] text-base lg:text-lg leading-relaxed">
              Let's transform your business with custom software and digital development services. At Sitenexa, we build websites and trust by developing top-notch digital products. Our custom offshore development services are a merger of cost-effective and innovative design solutions that drive digital transformation. Our expert team focuses on reducing operational costs and enhancing mobile and cloud capabilities for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default AgencySection;