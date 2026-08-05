import { CTALink } from "./CTAButton";
import { contactUrl } from "@/lib/site-config";
import consolesImg from "@/assets/consoles.jpg";
import jogosImg from "@/assets/jogos.jpg";
import setup3 from "@/assets/setup-3.jpg";

const ITEMS = [
  {
    title: "PS4 e PS5",
    text: "Aparelhos novos e seminovos, verificados antes da entrega.",
    image: consolesImg,
  },
  {
    title: "Xbox",
    text: "Modelos de gerações diferentes, com controles e acessórios.",
    image: setup3,
  },
  {
    title: "Jogos e acessórios",
    text: "Mídia física, controles extras, headsets e cabos.",
    image: jogosImg,
  },
];

export function ConsolesSection() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="eyebrow">Consoles e jogos</span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
          Do clássico à nova geração
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Trabalhamos com consoles e jogos de várias gerações. As marcas citadas pertencem
          aos seus respectivos proprietários e a Game Over Games não possui vínculo
          oficial com elas.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="surface-panel group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-electric"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <CTALink
          href={contactUrl(
            "Olá! Vi a seção de consoles e jogos no site da Game Over Games e gostaria de saber disponibilidade, valor e condições.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="lg"
          className="mt-10"
        >
          Consultar consoles e jogos
        </CTALink>
      </div>
    </section>
  );
}
