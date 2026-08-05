import { Quote } from "lucide-react";

/**
 * ATENÇÃO: cards de exemplo visual.
 * Substitua por depoimentos reais autorizados pelos clientes.
 * Nenhum nome, nota ou número real foi utilizado aqui.
 */
const EXAMPLES = [
  {
    text: "[Espaço reservado para depoimento real de cliente sobre a compra do PC gamer.]",
    label: "Cliente — exemplo visual",
  },
  {
    text: "[Espaço reservado para depoimento real de cliente sobre a compra de console.]",
    label: "Cliente — exemplo visual",
  },
  {
    text: "[Espaço reservado para depoimento real de cliente sobre o serviço de manutenção.]",
    label: "Cliente — exemplo visual",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="eyebrow">Depoimentos</span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
          Espaço para a voz dos clientes
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Os cards abaixo são exemplos visuais, prontos para receber depoimentos reais.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {EXAMPLES.map((t, i) => (
            <figure key={i} className="surface-panel rounded-2xl p-6">
              <Quote className="h-6 w-6 text-electric-soft" />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 font-display text-xs tracking-widest text-muted-foreground uppercase">
                {t.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
