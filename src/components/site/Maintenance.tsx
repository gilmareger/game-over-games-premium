import { Brush, Stethoscope, CpuIcon, Download, Gauge } from "lucide-react";
import { CTALink } from "./CTAButton";
import { contactUrl } from "@/lib/site-config";
import manutencao from "@/assets/manutencao.jpg";

const SERVICES = [
  { icon: Brush, title: "Limpeza", text: "Higienização interna e troca de pasta térmica." },
  { icon: Stethoscope, title: "Diagnóstico", text: "Identificação de falhas e travamentos." },
  { icon: CpuIcon, title: "Upgrade", text: "Troca e melhoria de componentes." },
  { icon: Download, title: "Instalação", text: "Sistema, drivers e programas essenciais." },
  { icon: Gauge, title: "Otimização", text: "Ajustes para ganhar desempenho no dia a dia." },
];

export function Maintenance() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative order-last overflow-hidden rounded-3xl border border-border lg:order-first">
          <img
            src={manutencao}
            alt="Técnico realizando manutenção em placa de computador"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <span className="eyebrow">Manutenção</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Seu equipamento rodando como deveria
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Serviços de manutenção para computadores e consoles, com atendimento em Timbó e
            região.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-3 rounded-xl border border-border bg-surface/60 p-4"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-electric-soft" />
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-xl border border-border bg-surface-2/60 p-4 text-sm text-muted-foreground">
            Orçamento e prazo dependem de avaliação técnica do equipamento.
          </p>

          <CTALink
            href={contactUrl(
              "Olá! Vi os serviços de manutenção no site da Game Over Games e gostaria de solicitar uma avaliação.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-6"
          >
            Solicitar avaliação
          </CTALink>
        </div>
      </div>
    </section>
  );
}
