import { ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { contactUrl, productMessage } from "@/lib/site-config";
import { CTALink } from "./CTAButton";

export function Showcase() {
  return (
    <section id="produtos" className="relative border-y border-border/70 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-96 opacity-15 blur-3xl"
        style={{ background: "var(--gradient-electric)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">Disponíveis agora</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Produtos em destaque
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            PCs, consoles, jogos e periféricos selecionados. Consulte disponibilidade,
            configuração e condições diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="surface-panel group flex min-w-0 flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-electric"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full border border-border bg-background/85 px-3 py-1 font-display text-[0.62rem] font-semibold tracking-widest uppercase backdrop-blur">
                  {p.category}
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 font-display text-[0.62rem] font-semibold tracking-widest text-primary-foreground uppercase">
                  {p.condition}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-display text-base leading-snug font-bold sm:text-lg">
                  {p.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 border-t border-border pt-4">
                  <span className="block font-display text-lg font-bold text-electric-soft">
                    {p.price}
                  </span>
                  <span className="mt-2 inline-flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
                    {p.warranty}
                  </span>
                </div>

                <CTALink
                  href={contactUrl(productMessage(p.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full"
                >
                  Consultar este item
                </CTALink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
