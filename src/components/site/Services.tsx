import { Building2, Scale, Car, FileBadge, Landmark } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Avalúos Comerciales",
    desc: "Compra-venta, hipotecas y operaciones bancarias con valoraciones certificadas.",
  },
  {
    icon: Scale,
    title: "Avalúos Fiscales",
    desc: "Procesos sucesorios, particiones y trámites legales con respaldo técnico.",
  },
  {
    icon: Car,
    title: "Avalúos Vehiculares",
    desc: "Todo tipo de vehículos: livianos, pesados, agrícolas e industriales.",
  },
  {
    icon: FileBadge,
    title: "Avalúo de Licencias",
    desc: "Valuación de licencias de transporte y derechos comerciales.",
  },
  {
    icon: Landmark,
    title: "Avalúos de Mausoleos",
    desc: "Valuación especializada de bienes de uso patrimonial y conmemorativo.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl fade-in-up">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--copper)] mb-4">
            Nuestros Servicios
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Soluciones de valuación a la medida de cada necesidad
          </h2>
          <p className="mt-5 text-muted-foreground">
            Cada avalúo se realiza bajo metodologías certificadas y se respalda
            con documentación técnica conforme a la normativa guatemalteca.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="fade-in-up group relative rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-[var(--copper)]/40 hover:shadow-[var(--shadow-premium)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/8 text-primary flex items-center justify-center group-hover:bg-[var(--copper)]/12 group-hover:text-[var(--copper)] transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center text-xs font-medium tracking-wider uppercase text-[var(--copper)]">
                Solicitar información →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
