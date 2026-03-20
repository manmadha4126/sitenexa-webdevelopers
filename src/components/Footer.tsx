const Footer = () => (
  <footer className="section-dark py-10 border-t border-primary-foreground/10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dark-muted">
      <span className="font-display text-primary-foreground font-bold text-lg">Sitenexa</span>
      <span>© {new Date().getFullYear()} Sitenexa. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
