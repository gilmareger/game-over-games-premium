import { ShieldCheck, CreditCard, Truck } from "lucide-react";
import { CTALink } from "./CTAButton";
import { contactUrl, GENERIC_MESSAGE } from "@/lib/site-config";
import pcGamer from "@/assets/pc-gamer.jpg";
import consoles from "@/assets/consoles.jpg";
import perifericos from "@/assets/perifericos.jpg";

const SEALS = [
  { icon: ShieldCheck, label: "Produtos com garantia" },
  { icon: CreditCard, label: "Parcelamento disponível" },
  { icon: Truck, label: "Entrega na região" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-electric)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise min-w-0">
          <span className="eyebrow">Timbó e região</span>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] font-bold sm:text-6xl xl:text-7xl">
            Seu próximo nível <span className="text-gradient-electric">começa aqui.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            PCs gamer, consoles, jogos e periféricos selecionados, com garantia e
            atendimento para Timbó e região.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTALink href="#produtos" size="lg">
              Ver produtos disponíveis
            </CTALink>
            <CTALink
              href={contactUrl(GENERIC_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Falar com a Game Over
            </CTALink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {SEALS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-medium text-muted-foreground"
              >
                <Icon className="h-4 w-4 shrink-0 text-electric-soft" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Composição em camadas — troque as imagens por fotos reais depois */}
        <div className="relative mx-auto h-[24rem] w-full max-w-lg sm:h-[30rem]">
          <div className="surface-panel absolute inset-x-4 top-4 bottom-10 overflow-hidden rounded-2xl">
            <img
              src={pcGamer}
              alt="PC gamer com iluminação azul em destaque"
              width={1024}
              height={1280}
              className="h-full w-full object-cover opacity-95"
            />
          </div>
          <div className="glow-ring animate-float absolute -bottom-2 -left-1 w-40 overflow-hidden rounded-xl border border-border sm:w-52">
            <img
              src={consoles}
              alt="Console e controle sem fio"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-28 overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elevated)] sm:w-36">
            <img
              src={perifericos}
              alt="Teclado, mouse e headset gamer"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
