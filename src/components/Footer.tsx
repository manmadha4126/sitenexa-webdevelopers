import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="section-dark py-10 border-t border-primary-foreground/10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dark-muted">
      <a href="#" className="flex items-center gap-2">
        <img src={logo} alt="Sitenexa" className="h-7 w-7" />
        <span className="font-display text-primary-foreground font-bold text-lg">Sitenexa</span>
      </a>
      <span>© {new Date().getFullYear()} Sitenexa. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
