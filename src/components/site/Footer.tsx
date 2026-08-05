import { Instagram } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold tracking-[0.14em]">
            GAME <span className="text-gradient-electric">OVER</span> GAMES
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            PCs gamer, consoles, jogos, periféricos e manutenção em {SITE.region}.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-electric-soft"
          >
            <Instagram className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div>
          <h2 className="eyebrow">Categorias</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["PCs Gamer", "Consoles", "Jogos", "Periféricos", "Manutenção"].map((c) => (
              <li key={c}>
                <a href="#produtos" className="transition-colors hover:text-foreground">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Atendimento</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Atendimento para {SITE.region}. Fale pelo Instagram para consultar
            disponibilidade, valores e condições.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs leading-relaxed text-muted-foreground sm:px-6">
          <p>
            Marcas, nomes de consoles e jogos citados neste site pertencem aos seus
            respectivos proprietários. A Game Over Games é uma loja independente e não
            possui vínculo oficial com essas marcas.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Game Over Games — {SITE.region}.
          </p>
        </div>
      </div>
    </footer>
  );
}
