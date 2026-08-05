import { Instagram, MessageCircle } from "lucide-react";
import { contactUrl, GENERIC_MESSAGE, WHATSAPP_NUMBER } from "@/lib/site-config";

export function FloatingContact() {
  const Icon = WHATSAPP_NUMBER ? MessageCircle : Instagram;
  return (
    <a
      href={contactUrl(GENERIC_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Game Over Games"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-3 font-display text-xs font-semibold tracking-wider text-foreground uppercase shadow-[0_18px_50px_-18px_var(--electric)] backdrop-blur-xl transition-all hover:border-electric hover:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <Icon className="h-4 w-4 text-electric-soft" />
      <span className="hidden sm:inline">Falar agora</span>
    </a>
  );
}
