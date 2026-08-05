/**
 * ============================================================
 *  VITRINE — DESTAQUES DISPONÍVEIS
 * ------------------------------------------------------------
 *  Edite livremente esta lista para atualizar a vitrine do site.
 *  - image: troque pelo import de uma foto real da loja
 *  - price: use "Consulte" quando não quiser exibir valor
 * ============================================================
 */
import pcGamer from "@/assets/pc-gamer.jpg";
import consoles from "@/assets/consoles.jpg";
import jogos from "@/assets/jogos.jpg";
import perifericos from "@/assets/perifericos.jpg";
import setup2 from "@/assets/setup-2.jpg";
import setup3 from "@/assets/setup-3.jpg";

export type Condition = "Novo" | "Seminovo";

export interface Product {
  id: string;
  category: string;
  name: string;
  condition: Condition;
  /** Ex.: "R$ 3.499" ou "Consulte" */
  price: string;
  warranty: string;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "pc-entrada",
    category: "PC Gamer",
    name: "PC Gamer Linha Entrada (exemplo)",
    condition: "Novo",
    price: "Consulte",
    warranty: "Garantia informada na venda",
    image: pcGamer,
    description: "Configuração equilibrada para jogos populares em 1080p.",
  },
  {
    id: "pc-performance",
    category: "PC Gamer",
    name: "PC Gamer Performance (exemplo)",
    condition: "Novo",
    price: "Consulte",
    warranty: "Garantia informada na venda",
    image: setup2,
    description: "Montagem focada em alta taxa de quadros e streaming.",
  },
  {
    id: "console-nova-geracao",
    category: "Consoles",
    name: "Console Nova Geração (exemplo)",
    condition: "Novo",
    price: "Consulte",
    warranty: "Garantia informada na venda",
    image: consoles,
    description: "Console de última geração com controle sem fio incluso.",
  },
  {
    id: "console-seminovo",
    category: "Consoles",
    name: "Console Geração Anterior (exemplo)",
    condition: "Seminovo",
    price: "Consulte",
    warranty: "Garantia informada na venda",
    image: setup3,
    description: "Aparelho testado e revisado, ótimo custo-benefício.",
  },
  {
    id: "jogo-midia-fisica",
    category: "Jogos",
    name: "Jogos em Mídia Física (exemplo)",
    condition: "Seminovo",
    price: "Consulte",
    warranty: "Testado antes da entrega",
    image: jogos,
    description: "Títulos variados para consoles atuais e anteriores.",
  },
  {
    id: "kit-perifericos",
    category: "Periféricos",
    name: "Kit Teclado, Mouse e Headset (exemplo)",
    condition: "Novo",
    price: "Consulte",
    warranty: "Garantia informada na venda",
    image: perifericos,
    description: "Periféricos selecionados para conforto e resposta rápida.",
  },
];
