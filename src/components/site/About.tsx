import logo from "@/assets/keme-logo.png";

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-[color-mix(in_oklab,_var(--primary)_4%,_var(--background))]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div className="fade-in-up relative">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/15 via-[var(--earth)]/10 to-[var(--copper)]/15 border border-border shadow-[var(--shadow-premium)] flex items-center justify-center overflow-hidden">
            <img src={logo} alt="" className="w-2/3 opacity-90" />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-premium)] max-w-xs">
            <div className="font-serif text-3xl text-[var(--copper)]">Keme</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Glifo maya que simboliza transformación y precisión — los valores
              que inspiran nuestro trabajo.
            </p>
          </div>
        </div>

        <div className="fade-in-up">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--copper)] mb-4">
            Sobre Nosotros
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Tradición, ética y rigor técnico al servicio de su patrimonio
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              En <strong className="text-foreground">Avalúos Keme</strong> combinamos
              años de experiencia en la valuación de bienes muebles e inmuebles
              con un profundo respeto por la identidad cultural de Guatemala.
              Nuestro nombre, inspirado en el glifo maya <em>Keme</em>, refleja
              el equilibrio entre la transformación y la precisión.
            </p>
            <p>
              Cada informe se elabora bajo principios de objetividad,
              imparcialidad y apego a las normas técnicas internacionales,
              garantizando un respaldo confiable para procesos comerciales,
              fiscales y legales.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
            <div className="border-l-2 border-[var(--copper)] pl-4">
              <div className="font-serif text-2xl text-primary">Ética</div>
              <p className="text-xs text-muted-foreground mt-1">Profesional e imparcial</p>
            </div>
            <div className="border-l-2 border-[var(--copper)] pl-4">
              <div className="font-serif text-2xl text-primary">Respaldo</div>
              <p className="text-xs text-muted-foreground mt-1">Técnico y legal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
