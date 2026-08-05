import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Os produtos têm garantia?",
    a: "Sim. A garantia é informada individualmente em cada produto, conforme o tipo e a condição do item (novo ou seminovo). Confirme os detalhes no atendimento antes de fechar a compra.",
  },
  {
    q: "É possível parcelar?",
    a: "Sim, há parcelamento disponível. As condições variam conforme o produto e a forma de pagamento — consulte no atendimento.",
  },
  {
    q: "Vocês entregam em Timbó e região?",
    a: "Sim. A entrega é combinada diretamente com você no atendimento, de acordo com a localidade dentro da região.",
  },
  {
    q: "Qual a diferença entre produtos novos e seminovos?",
    a: "Produtos novos são lacrados. Seminovos passam por verificação de funcionamento antes da venda e têm a condição sempre informada de forma clara na ficha do produto.",
  },
  {
    q: "Como funciona a montagem de PC gamer?",
    a: "Partimos do seu objetivo (jogos, resolução, streaming) e do orçamento disponível. A partir disso montamos a configuração recomendada, realizamos a montagem e os testes antes da entrega.",
  },
  {
    q: "Como funciona a manutenção?",
    a: "Fazemos limpeza, diagnóstico, upgrade, instalação e otimização. Orçamento e prazo dependem da avaliação técnica do equipamento.",
  },
];

export function FAQ() {
  return (
    <section id="duvidas" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <span className="eyebrow">Dúvidas</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:text-electric-soft">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
