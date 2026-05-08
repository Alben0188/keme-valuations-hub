import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Trust } from "@/components/site/Trust";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useFadeInOnScroll } from "@/hooks/use-fade-in";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Avalúos Keme — Valuación Profesional en Guatemala" },
      {
        name: "description",
        content:
          "Avalúos comerciales, fiscales, vehiculares y especializados en toda Guatemala. Solicite su cotización al 5586-4816.",
      },
    ],
  }),
});

function Index() {
  useFadeInOnScroll();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
