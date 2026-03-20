import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Send, MapPin, ArrowRight } from "lucide-react";
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
    <section id="contact" className="relative py-24 lg:py-32 bg-[hsl(210,60%,15%)] overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(200,80%,50%)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(260,60%,40%)]/8 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info - 2 cols */}
          <div className={`lg:col-span-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="inline-block bg-[hsl(200,80%,50%)] text-white text-base font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full mb-6">
              Contact Us
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6">
              Let's Start a<br />
              <span className="text-[hsl(200,80%,50%)]">Conversation</span>
            </h2>
            <p className="text-[hsl(210,20%,65%)] text-lg leading-relaxed mb-10">
              Ready to transform your digital presence? Drop us a line and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              <a href="mailto:sitenexa@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[hsl(200,80%,50%)]/15 flex items-center justify-center group-hover:bg-[hsl(200,80%,50%)]/25 transition-colors">
                  <Mail size={20} className="text-[hsl(200,80%,50%)]" />
                </div>
                <div>
                  <div className="text-[hsl(210,20%,55%)] text-xs uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white font-medium group-hover:text-[hsl(200,80%,50%)] transition-colors">sitenexa@gmail.com</div>
                </div>
              </a>

              <a href="tel:+918074666415" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[hsl(200,80%,50%)]/15 flex items-center justify-center group-hover:bg-[hsl(200,80%,50%)]/25 transition-colors">
                  <Phone size={20} className="text-[hsl(200,80%,50%)]" />
                </div>
                <div>
                  <div className="text-[hsl(210,20%,55%)] text-xs uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-white font-medium group-hover:text-[hsl(200,80%,50%)] transition-colors">+91 8074666415</div>
                  <div className="text-white/60 text-sm">+91 9676133441</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(200,80%,50%)]/15 flex items-center justify-center">
                  <MapPin size={20} className="text-[hsl(200,80%,50%)]" />
                </div>
                <div>
                  <div className="text-[hsl(210,20%,55%)] text-xs uppercase tracking-wider mb-0.5">Contact Person</div>
                  <div className="text-white font-semibold text-lg">Manmadha</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form - 3 cols */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 lg:p-10 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "150ms" }}
          >
            <h3 className="text-white text-2xl font-bold mb-8">Send Us a Message</h3>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="text-[hsl(210,20%,65%)] text-sm font-medium mb-2 block">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[hsl(200,80%,50%)] focus:ring-1 focus:ring-[hsl(200,80%,50%)]/30 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[hsl(210,20%,65%)] text-sm font-medium mb-2 block">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[hsl(200,80%,50%)] focus:ring-1 focus:ring-[hsl(200,80%,50%)]/30 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-[hsl(210,20%,65%)] text-sm font-medium mb-2 block">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[hsl(200,80%,50%)] focus:ring-1 focus:ring-[hsl(200,80%,50%)]/30 transition-all resize-none"
                placeholder="Tell us about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 bg-[hsl(200,80%,50%)] text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-[hsl(200,80%,45%)] transition-colors active:scale-[0.97] disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
