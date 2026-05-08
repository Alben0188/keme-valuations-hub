import { useEffect, useState } from "react";
import logo from "@/assets/keme-logo.png";
import { Phone } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Avalúos Keme" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-lg md:text-xl text-primary font-semibold">Avalúos Keme</div>
            <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Valuación Profesional
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
          <a href="#confianza" className="hover:text-primary transition-colors">Por qué elegirnos</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </nav>

        <a
          href="tel:55864816"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--copper)] text-[var(--copper-foreground)] px-4 py-2 text-sm font-medium shadow-[var(--shadow-soft)] hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">5586-4816</span>
        </a>
      </div>
    </header>
  );
}
