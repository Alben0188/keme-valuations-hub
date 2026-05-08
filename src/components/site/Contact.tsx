import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Nombre requerido").max(100),
  type: z.string().min(1, "Seleccione un tipo"),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20),
  message: z.string().trim().min(5, "Mensaje muy corto").max(1000),
});

const TYPES = [
  "Avalúo Comercial",
  "Avalúo Fiscal",
  "Avalúo Vehicular",
  "Avalúo de Licencias",
  "Avalúo de Mausoleos",
  "Otro",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", type: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(
      `Hola Avalúos Keme, soy ${form.name}.\nTipo: ${form.type}\nTel: ${form.phone}\nMensaje: ${form.message}`
    );
    window.open(`https://wa.me/50255864816?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[color-mix(in_oklab,_var(--primary)_5%,_var(--background))]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">
        <div className="fade-in-up">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--copper)] mb-4">Contacto</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Solicite su cotización sin compromiso
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nuestro equipo le responderá con un presupuesto detallado en un
            plazo máximo de 24 horas.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:55864816" className="flex items-start gap-4 group">
              <div className="h-11 w-11 rounded-lg bg-[var(--copper)]/10 text-[var(--copper)] flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Teléfono</div>
                <div className="text-foreground group-hover:text-[var(--copper)] transition">5586-4816</div>
              </div>
            </a>
            <a href="mailto:avaluoskeme@gmail.com" className="flex items-start gap-4 group">
              <div className="h-11 w-11 rounded-lg bg-[var(--copper)]/10 text-[var(--copper)] flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="text-foreground group-hover:text-[var(--copper)] transition">avaluoskeme@gmail.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-lg bg-[var(--copper)]/10 text-[var(--copper)] flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Cobertura</div>
                <div className="text-foreground">Toda la República de Guatemala</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="fade-in-up bg-card border border-border rounded-2xl p-7 md:p-9 shadow-[var(--shadow-premium)] space-y-5"
        >
          <Field label="Nombre completo" error={errors.name}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--copper)]/40"
            />
          </Field>

          <Field label="Tipo de Avalúo" error={errors.type}>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--copper)]/40"
            >
              <option value="">Seleccione una opción</option>
              {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </Field>

          <Field label="Teléfono" error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--copper)]/40"
            />
          </Field>

          <Field label="Mensaje" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={4}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--copper)]/40 resize-none"
            />
          </Field>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[var(--copper)] text-[var(--copper-foreground)] px-6 py-3 text-sm font-medium tracking-wide shadow-[var(--shadow-soft)] hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" />
            Enviar Solicitud
          </button>

          {sent && (
            <p className="text-xs text-center text-primary">
              Abrimos WhatsApp con su mensaje. ¡Gracias por contactarnos!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
