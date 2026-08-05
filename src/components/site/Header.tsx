import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTALink } from "./CTAButton";
import { contactUrl, GENERIC_MESSAGE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Garantia", href: "#garantia" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a
          href="#inicio"
          className="min-w-0 font-display text-base font-bold tracking-[0.14em] text-foreground sm:text-lg"
        >
          GAME <span className="text-gradient-electric">OVER</span> GAMES
        </a>

        <nav className="hidden justify-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-display text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CTALink
            href={contactUrl(GENERIC_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Consultar disponibilidade
          </CTALink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-surface-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-display text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <CTALink
              href={contactUrl(GENERIC_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="my-4"
            >
              Consultar disponibilidade
            </CTALink>
          </nav>
        </div>
      )}
    </header>
  );
}
