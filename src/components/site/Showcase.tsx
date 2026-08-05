import { ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { contactUrl, productMessage } from "@/lib/site-config";
import { CTALink } from "./CTAButton";

export function Showcase() {
  return (
    <section className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-96 opacity-15 blur-3xl"
        style={{ background: "var(--gradient-electric)" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <span className="eyebrow">Vitrine</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              Destaques disponíveis
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Exemplos de itens que trabalhamos. Consulte disponibilidade atualizada e
              condições de pagamento.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="surface-panel group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-electric"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full border border-border bg-background/80 px-3 py-1 font-display text-[0.65rem] font-semibold tracking-widest uppercase backdrop-blur">
                  {p.category}
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 font-display text-[0.65rem] font-semibold tracking-widest text-primary-foreground uppercase">
                  {p.condition}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg leading-snug font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="font-display text-xl font-bold text-electric-soft">
                    {p.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    {p.warranty}
                  </span>
                </div>

                <CTALink
                  href={contactUrl(productMessage(p.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full"
                >
                  Tenho interesse
                </CTALink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
