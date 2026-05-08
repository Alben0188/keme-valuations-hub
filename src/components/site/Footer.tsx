import logo from "@/assets/keme-logo.png";
import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Avalúos Keme" className="h-12 w-12 object-contain bg-background/10 rounded-lg p-1" />
            <div>
              <div className="font-serif text-xl">Avalúos Keme</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Valuación Profesional</div>
            </div>
          </div>
          <p className="mt-5 text-sm opacity-80 max-w-md leading-relaxed">
            Valuación técnica y legal de bienes muebles e inmuebles en Guatemala,
            con respaldo profesional y enfoque cultural.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="tel:55864816" className="hover:opacity-100 hover:text-[var(--copper)]">5586-4816</a></li>
            <li><a href="mailto:avaluoskeme@gmail.com" className="hover:opacity-100 hover:text-[var(--copper)]">avaluoskeme@gmail.com</a></li>
            <li>Guatemala, C.A.</li>
          </ul>
          <a
            href="https://m.me/avaluoskeme"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm border border-primary-foreground/30 rounded-md px-3.5 py-2 hover:bg-primary-foreground/10 transition"
          >
            <Facebook className="h-4 w-4" /> Messenger
          </a>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:opacity-100">Aviso de Privacidad</a></li>
            <li><a href="#" className="hover:opacity-100">Términos de Servicio</a></li>
            <li><a href="#" className="hover:opacity-100">Política de Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-70">
        <div>© {new Date().getFullYear()} Avalúos Keme. Todos los derechos reservados.</div>
        <div>Diseñado con precisión técnica y cultural.</div>
      </div>
    </footer>
  );
}
