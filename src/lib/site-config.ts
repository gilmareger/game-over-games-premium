/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DE CONTATO — GAME OVER GAMES
 * ============================================================
 *
 *  >>> PARA ATIVAR O WHATSAPP DEPOIS:
 *      1. Preencha WHATSAPP_NUMBER com o número em formato
 *         internacional, apenas dígitos. Ex: "5547999999999".
 *      2. Pronto. Todos os botões do site passam automaticamente
 *         a abrir o WhatsApp com mensagem pronta, em vez do Instagram.
 *
 *  Enquanto WHATSAPP_NUMBER estiver vazio (""), todos os CTAs
 *  apontam temporariamente para o Instagram oficial.
 * ============================================================
 */
export const WHATSAPP_NUMBER = ""; // <-- INSIRA O NÚMERO DO WHATSAPP AQUI

export const INSTAGRAM_URL = "https://www.instagram.com/gameover.games/";
export const INSTAGRAM_HANDLE = "@gameover.games";

export const SITE = {
  name: "Game Over Games",
  region: "Timbó e região",
  tagline: "Seu próximo nível começa aqui.",
} as const;

/** Monta o link de contato com mensagem contextual pronta. */
export function contactUrl(message: string): string {
  if (WHATSAPP_NUMBER) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  // Fallback temporário: Instagram (mensagem entra na DM manualmente).
  return INSTAGRAM_URL;
}

/** Mensagem padrão para um produto específico. */
export function productMessage(productName: string): string {
  return `Olá! Vi o ${productName} no site da Game Over Games e gostaria de saber disponibilidade, valor e condições.`;
}

export const GENERIC_MESSAGE =
  "Olá! Vim pelo site da Game Over Games e gostaria de falar sobre produtos e disponibilidade.";
