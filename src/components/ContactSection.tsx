import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Send, MapPin, ArrowRight, Globe } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="relative overflow-hidden" ref={ref}>
      {/* Top dark section with heading + social icons */}
      <div className="bg-[hsl(240,20%,12%)] pt-20 pb-32 lg:pb-40 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(260,60%,50%)]/5 blur-[120px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: heading + social */}
            <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <span className="inline-block bg-[hsl(260,70%,55%)] text-white text-sm font-bold uppercase tracking-[0.15em] px-5 py-2 rounded-md mb-6">
                Contact Us
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-8">
                Connect with Us for<br />
                the Best & Perfect <span className="text-[hsl(260,70%,65%)]">Solutions</span>
              </h2>

              {/* Social icons row */}
              <div className="flex gap-4">
                {[
                  { icon: "📷", bg: "bg-gradient-to-br from-[hsl(330,80%,55%)] to-[hsl(30,90%,55%)]", href: "#" },
                  { icon: "📍", bg: "bg-[hsl(130,60%,45%)]", href: "#" },
                  { icon: "💬", bg: "bg-[hsl(140,70%,45%)]", href: "https://wa.me/918074666415" },
                  { icon: "📞", bg: "bg-[hsl(210,80%,55%)]", href: "tel:+918074666415" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className={`w-12 h-12 ${s.bg} rounded-full flex items-center justify-center text-white text-lg hover:scale-110 transition-transform`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form card (overlaps into bottom section) */}
            <div
              className={`relative z-20 bg-white rounded-2xl shadow-2xl p-8 lg:p-10 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "150ms" }}
            >
              <h3 className="text-[hsl(260,70%,55%)] text-xl font-bold text-center mb-1">Schedule a Free Consultation</h3>
              <p className="text-center text-2xl mb-6">🤝</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[hsl(260,70%,55%)] text-sm font-semibold mb-1.5 block">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,90%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,60%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="text-[hsl(260,70%,55%)] text-sm font-semibold mb-1.5 block">Email*</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,90%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,60%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-[hsl(260,70%,55%)] text-sm font-semibold mb-1.5 block">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,90%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,60%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label className="text-[hsl(260,70%,55%)] text-sm font-semibold mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,90%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,60%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all resize-none"
                    placeholder="Tell us about your project…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-[hsl(260,70%,55%)] text-white px-8 py-3 rounded-lg text-sm font-semibold tracking-wide hover:bg-[hsl(260,70%,48%)] transition-colors active:scale-[0.97] disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom light section with contact details */}
      <div className="bg-[hsl(230,30%,96%)] pt-16 pb-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <Phone size={22} className="text-[hsl(260,70%,55%)] mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-[hsl(240,20%,15%)] mb-1">Call us at:</h4>
                <p className="text-[hsl(230,10%,40%)] text-sm">8074666415 | 9676133441</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={22} className="text-[hsl(260,70%,55%)] mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-[hsl(240,20%,15%)] mb-1">Email:</h4>
                <p className="text-[hsl(230,10%,40%)] text-sm">sitenexa21@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe size={22} className="text-[hsl(260,70%,55%)] mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-[hsl(240,20%,15%)] mb-1">Website:</h4>
                <p className="text-[hsl(230,10%,40%)] text-sm">www.sitenexa.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-[hsl(260,70%,55%)] mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-[hsl(240,20%,15%)] mb-1">Contact Person:</h4>
                <p className="text-[hsl(230,10%,40%)] text-sm font-semibold">Manmadha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
