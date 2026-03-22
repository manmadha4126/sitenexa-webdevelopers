import logo from "@/assets/logo.png";
import { Mail, Phone, ContactRound } from "lucide-react";

const navLinks = [
{ label: "About", href: "#about" },
{ label: "Services", href: "#services" },
{ label: "Portfolio", href: "#portfolio" },
{ label: "Testimonials", href: "#testimonials" },
{ label: "Contact", href: "#contact" }];


const Footer = () =>
<footer className="section-dark py-16 border-t border-primary-foreground/10">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Sitenexa" className="h-8 w-8" />
            <span className="font-display text-primary-foreground font-bold text-xl">Sitenexa</span>
          </a>
          <p className="text-[hsl(210,20%,60%)] text-sm leading-relaxed">
            Sitenexa is a next-generation web solutions company driven by a passion for building impactful digital experiences. We combine design thinking with technical expertise to help businesses thrive in the digital landscape. Your vision, our craft — together we build the future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="text-primary-foreground font-semibold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) =>
          <li key={link.href}>
                <a
              href={link.href}
              className="text-[hsl(210,20%,60%)] hover:text-[hsl(200,80%,50%)] transition-colors text-sm">
              
                  {link.label}
                </a>
              </li>
          )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-primary-foreground font-semibold text-base mb-4">Contact Info</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <ContactRound size={16} className="text-[hsl(200,80%,50%)] shrink-0" />
              <span className="text-[hsl(210,20%,60%)] text-sm">Manmadha</span>
            </div>
            <a href="tel:+918074666415" className="flex items-center gap-3 text-[hsl(210,20%,60%)] hover:text-[hsl(200,80%,50%)] transition-colors text-sm">
              <Phone size={16} className="text-[hsl(200,80%,50%)] shrink-0" />
              +91 8074666415
            </a>
            <a href="tel:+919676133441" className="flex items-center gap-3 text-[hsl(210,20%,60%)] hover:text-[hsl(200,80%,50%)] transition-colors text-sm">
              <Phone size={16} className="text-[hsl(200,80%,50%)] shrink-0" />
              +91 9676133441
            </a>
            <a href="mailto:sitenexa21@gmail.com" className="flex items-center gap-3 text-[hsl(210,20%,60%)] hover:text-[hsl(200,80%,50%)] transition-colors text-sm">
              <Mail size={16} className="text-[hsl(200,80%,50%)] shrink-0" />
              sitenexa21@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[hsl(210,20%,55%)]">
        <span>© {new Date().getFullYear()} Sitenexa. All rights reserved.</span>
        <span className="text-xs">Next-Generation Web Solutions</span>
      </div>
    </div>
  </footer>;


export default Footer;