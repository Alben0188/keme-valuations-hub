import logo from "@/assets/keme-logo.png";
import housesBg from "@/assets/houses-bg.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 md:pt-44 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Blurred houses background — evokes property appraisals */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.35] saturate-75"
        style={{ backgroundImage: `url(${housesBg})`, filter: "blur(4px)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      {/* Decorative watermark glyph */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-20 md:right-10 top-24 w-[420px] md:w-[560px] opacity-[0.06] rotate-[-8deg]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_color-mix(in_oklab,_var(--primary)_8%,_transparent),_transparent_60%)]" />


      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--copper)]" />
            Avalúos Certificados · Guatemala
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
            Valuación Profesional con Respaldo{" "}
            <em className="not-italic text-[var(--copper)]">Técnico y Cultural</em>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Expertos en avalúos comerciales, fiscales y técnicos en toda
            Guatemala. Precisión, ética y experiencia al servicio de su
            patrimonio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md bg-[var(--copper)] text-[var(--copper-foreground)] px-7 py-3.5 text-sm font-medium tracking-wide shadow-[var(--shadow-premium)] hover:opacity-90 transition"
            >
              Solicitar Cotización
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-md border border-primary/30 text-primary px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-primary/5 transition"
            >
              Ver Servicios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
            {[
              ["+15", "Años de experiencia"],
              ["100%", "Cobertura nacional"],
              ["+1k", "Avalúos realizados"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-primary">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 fade-in-up">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-[var(--earth)]/10 to-[var(--copper)]/10 border border-border shadow-[var(--shadow-premium)]" />
            <img
              src={logo}
              alt="Glifo Keme — identidad visual"
              className="absolute inset-0 m-auto w-3/4 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
