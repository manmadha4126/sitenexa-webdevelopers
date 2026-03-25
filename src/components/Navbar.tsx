import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
{ label: "About", href: "#about" },
{ label: "Services", href: "#services" },
{ label: "Portfolio", href: "#portfolio" },
{ label: "Testimonials", href: "#testimonials" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-primary/95 backdrop-blur-md py-5 shadow-lg" :
      "bg-transparent py-7"}`
      }>
      
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Sitenexa" className="h-9 w-9 bg-transparent" style={{ background: 'none' }} />
          <span className="text-primary-foreground font-bold tracking-tight text-4xl text-left font-serif border-0">Sitenexa</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm tracking-wide uppercase transition-all duration-200 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/25 border border-white/15 hover:border-white/40 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-white/5">
            
              {l.label}
            </a>
          )}
          <a
            href="#contact"
            className="text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-200 active:scale-[0.97] bg-cyan-500 hover:scale-105">
            
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu">
          
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen &&
      <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 mt-2">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="text-primary-foreground/80 hover:text-primary-foreground text-base py-2 transition-colors px-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            
                {l.label}
              </a>
          )}
            <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-accent-foreground px-5 py-3 rounded-md text-sm font-semibold text-center mt-2">
            
              Get Started
            </a>
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;