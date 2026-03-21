import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
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
      {/* Top: Dark left + Form right */}
      <div className="grid lg:grid-cols-2">
        {/* Left dark panel */}
        <div className="bg-[hsl(240,20%,14%)] px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
          <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="inline-block bg-[hsl(260,70%,55%)] text-white text-xs font-bold uppercase tracking-[0.18em] px-5 py-2 rounded-md mb-8">
              Contact Us
            </span>
            <h2 className="font-display text-4xl lg:text-[2.8rem] font-bold tracking-tight leading-[1.15] text-white mb-10">
              Connect with Us for<br />
              the Best & Perfect <span className="text-[hsl(30,90%,65%)]">Solutions</span>
            </h2>

            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(330,80%,55%)] to-[hsl(30,90%,55%)] flex items-center justify-center text-white hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[hsl(4,80%,55%)] flex items-center justify-center text-white hover:scale-110 transition-transform">
                <MapPin size={20} />
              </a>
              <a href="https://wa.me/918074666415" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[hsl(140,70%,42%)] flex items-center justify-center text-white hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="tel:+918074666415" className="w-12 h-12 rounded-full bg-[hsl(210,80%,55%)] flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="bg-[hsl(230,30%,95%)] px-8 lg:px-16 py-16 lg:py-20 flex items-center justify-center">
          <div
            className={`w-full max-w-md bg-white rounded-2xl shadow-xl p-8 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "150ms" }}
          >
            <h3 className="text-[hsl(260,70%,45%)] text-xl font-bold text-center mb-1">Schedule a Free Consultation</h3>
            <p className="text-center text-2xl mb-6">🤝</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[hsl(260,70%,45%)] text-sm font-semibold mb-1.5 block">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,88%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,65%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-[hsl(260,70%,45%)] text-sm font-semibold mb-1.5 block">Email*</label>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,88%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,65%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-[hsl(260,70%,45%)] text-sm font-semibold mb-1.5 block">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  maxLength={15}
                  className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,88%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,65%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <label className="text-[hsl(260,70%,45%)] text-sm font-semibold mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full rounded-lg bg-[hsl(230,30%,96%)] border border-[hsl(230,20%,88%)] px-4 py-3 text-sm text-[hsl(240,20%,15%)] placeholder:text-[hsl(230,10%,65%)] outline-none focus:border-[hsl(260,70%,55%)] focus:ring-1 focus:ring-[hsl(260,70%,55%)]/30 transition-all resize-none"
                  placeholder="Tell us about your project…"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="bg-[hsl(260,70%,50%)] text-white px-8 py-3 rounded-lg text-sm font-semibold tracking-wide hover:bg-[hsl(260,70%,44%)] transition-colors active:scale-[0.97] disabled:opacity-60"
              >
                {sending ? "Sending…" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom contact details strip */}
      <div className="bg-white py-14 border-t border-[hsl(230,20%,92%)]">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex items-start gap-4">
              <Phone size={22} className="text-[hsl(240,20%,25%)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[hsl(240,20%,15%)] mb-1">Call us at:</h4>
                <p className="text-[hsl(230,10%,40%)] text-sm">8074666415 | 9676133441</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={22} className="text-[hsl(240,20%,25%)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[hsl(240,20%,15%)] mb-1">Email:</h4>
                <p className="text-[hsl(230,10%,40%)] text-sm">sitenexa21@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe size={22} className="text-[hsl(240,20%,25%)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[hsl(240,20%,15%)] mb-1">Website:</h4>
                <p className="text-[hsl(230,10%,40%)] text-sm">www.sitenexa.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={22} className="text-[hsl(240,20%,25%)] mt-0.5 shrink-0" />
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
