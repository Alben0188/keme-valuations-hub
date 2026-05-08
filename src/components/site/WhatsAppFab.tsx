import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/50255864816"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-premium)] hover:scale-105 transition">
        <MessageCircle className="h-7 w-7" />
      </span>
    </a>
  );
}
