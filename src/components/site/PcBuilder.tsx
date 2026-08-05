import { CTALink } from "./CTAButton";
import { contactUrl } from "@/lib/site-config";
import setup2 from "@/assets/setup-2.jpg";

const STEPS = [
  {
    n: "01",
    title: "Objetivo",
    text: "Quais jogos você joga, em qual resolução e se pretende transmitir.",
  },
  {
    n: "02",
    title: "Orçamento",
    text: "Definimos a faixa de investimento antes de sugerir qualquer peça.",
  },
  {
    n: "03",
    title: "Configuração recomendada",
    text: "Montamos a lista de componentes equilibrada para o seu uso real.",
  },
  {
    n: "04",
    title: "Entrega e testes",
    text: "Montagem, testes de estabilidade e orientações de uso na entrega.",
  },
];

export function PcBuilder() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="min-w-0">
          <span className="eyebrow">PC Gamer sob medida</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Monte o PC ideal para o seu jogo e orçamento
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Nada de configuração genérica. A gente parte do que você joga e de quanto quer
            investir para chegar na máquina certa.
          </p>

          <ol className="mt-10 space-y-4">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="surface-panel flex gap-4 rounded-xl p-5 transition-colors hover:border-electric"
              >
                <span className="font-display text-xl font-bold text-electric-soft">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <CTALink
            href={contactUrl(
              "Olá! Vi o site da Game Over Games e gostaria de pedir uma configuração de PC gamer para o meu objetivo e orçamento.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-8"
          >
            Pedir uma configuração
          </CTALink>
        </div>

        <div className="glow-ring relative overflow-hidden rounded-3xl border border-border">
          <img
            src={setup2}
            alt="Interior de um PC gamer com placa de vídeo e iluminação azul"
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
