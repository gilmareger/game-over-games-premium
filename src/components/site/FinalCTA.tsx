import { CTALink } from "./CTAButton";
import { contactUrl, GENERIC_MESSAGE, INSTAGRAM_URL } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 opacity-25 blur-3xl"
        style={{ background: "var(--gradient-electric)" }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="eyebrow">Game Over Games</span>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
          Pronto para <span className="text-gradient-electric">subir de nível?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
          Conte o que você procura e a gente indica a melhor opção disponível, com garantia
          e atendimento em Timbó e região.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <CTALink
            href={contactUrl(GENERIC_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Falar com a Game Over
          </CTALink>
          <CTALink
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            Ver o Instagram
          </CTALink>
        </div>
      </div>
    </section>
  );
}
