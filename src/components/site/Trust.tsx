import { Target, Zap, MapPin } from "lucide-react";

const items = [
  { icon: Target, title: "Precisión", desc: "Metodologías técnicas certificadas con datos verificables y documentación completa." },
  { icon: Zap, title: "Rapidez", desc: "Tiempos de respuesta optimizados sin comprometer la calidad del informe." },
  { icon: MapPin, title: "Cobertura Nacional", desc: "Atendemos los 22 departamentos de Guatemala con equipo propio." },
];

export function Trust() {
  return (
    <section id="confianza" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto fade-in-up">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--copper)] mb-4">
            Por qué elegirnos
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Confianza institucional en cada informe
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="fade-in-up text-center px-6 py-10 rounded-xl border border-border bg-card hover:border-[var(--copper)]/40 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/8 text-[var(--copper)] flex items-center justify-center">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-primary">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
