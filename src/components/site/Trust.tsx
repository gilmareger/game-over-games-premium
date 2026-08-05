import { CheckCircle2, ShieldCheck, Headphones, MapPin } from "lucide-react";

const ITEMS = [
  {
    icon: CheckCircle2,
    title: "Equipamentos testados",
    text: "Cada item passa por verificação de funcionamento antes de sair da loja.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia informada em cada produto",
    text: "Você sabe exatamente qual é a cobertura antes de fechar a compra.",
  },
  {
    icon: Headphones,
    title: "Atendimento antes e depois da compra",
    text: "Ajudamos na escolha e continuamos disponíveis para dúvidas de uso.",
  },
  {
    icon: MapPin,
    title: "Entrega em Timbó e região",
    text: "Combine a entrega direto com a gente, com atendimento local.",
  },
];

export function Trust() {
  return (
    <section id="garantia" className="relative border-y border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="eyebrow">Confiança</span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
          Compre tecnologia sem dor de cabeça
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="surface-panel rounded-2xl p-6 transition-colors hover:border-electric"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background">
                <Icon className="h-5 w-5 text-electric-soft" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
