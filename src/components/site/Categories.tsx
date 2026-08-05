import { ArrowRight } from "lucide-react";
import { contactUrl } from "@/lib/site-config";
import pcGamer from "@/assets/pc-gamer.jpg";
import consoles from "@/assets/consoles.jpg";
import jogos from "@/assets/jogos.jpg";
import perifericos from "@/assets/perifericos.jpg";
import manutencao from "@/assets/manutencao.jpg";

const CATEGORIES = [
  {
    title: "PCs Gamer",
    text: "Montagens novas e prontas para jogar, equilibrando desempenho e orçamento.",
    cta: "Montar meu PC",
    image: pcGamer,
    message:
      "Olá! Vi a categoria PCs Gamer no site da Game Over Games e gostaria de saber disponibilidade, valor e condições.",
    wide: true,
  },
  {
    title: "Consoles",
    text: "PS4, PS5 e Xbox, novos e seminovos, testados antes da entrega.",
    cta: "Ver consoles",
    image: consoles,
    message:
      "Olá! Vi a categoria Consoles no site da Game Over Games e gostaria de saber disponibilidade, valor e condições.",
  },
  {
    title: "Jogos",
    text: "Títulos em mídia física para diferentes gerações e estilos.",
    cta: "Ver jogos",
    image: jogos,
    message:
      "Olá! Vi a categoria Jogos no site da Game Over Games e gostaria de saber disponibilidade, valor e condições.",
  },
  {
    title: "Periféricos",
    text: "Teclados, mouses, headsets e acessórios para melhorar seu setup.",
    cta: "Ver periféricos",
    image: perifericos,
    message:
      "Olá! Vi a categoria Periféricos no site da Game Over Games e gostaria de saber disponibilidade, valor e condições.",
  },
  {
    title: "Manutenção",
    text: "Limpeza, diagnóstico, upgrade e otimização de PCs e consoles.",
    cta: "Pedir avaliação",
    image: manutencao,
    message:
      "Olá! Vi o serviço de Manutenção no site da Game Over Games e gostaria de saber sobre avaliação, valor e prazo.",
    wide: true,
  },
];

export function Categories() {
  return (
    <section id="produtos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="eyebrow">Categorias</span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
          Tudo para o seu setup em um só lugar
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.title}
              href={contactUrl(cat.message)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative isolate flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                cat.wide ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45 transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
              />
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(to top, var(--background) 8%, color-mix(in oklab, var(--background) 55%, transparent) 55%, transparent 100%)",
                }}
              />
              <h3 className="font-display text-2xl font-bold">{cat.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cat.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-widest text-electric-soft uppercase">
                {cat.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
