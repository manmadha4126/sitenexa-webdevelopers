import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Send } from "lucide-react";
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
    <section id="contact" className="section-light py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Contact Us
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-accent mb-6">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-md bg-primary flex items-center justify-center">
                  <Mail size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:sitenexa@gmail.com" className="font-medium hover:text-accent transition-colors">
                    sitenexa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-md bg-primary flex items-center justify-center">
                  <Phone size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+91 8074666415</div>
                  <div className="font-medium">+91 9676133441</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-1">Contact Person</div>
                <div className="font-semibold text-lg">Manmadha</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-5 ${isVisible ? "animate-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                placeholder="Tell us about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity active:scale-[0.97] disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
