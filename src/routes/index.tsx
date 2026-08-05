import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Showcase } from "@/components/site/Showcase";
import { Trust } from "@/components/site/Trust";
import { PcBuilder } from "@/components/site/PcBuilder";
import { ConsolesSection } from "@/components/site/ConsolesSection";
import { Maintenance } from "@/components/site/Maintenance";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingContact } from "@/components/site/FloatingContact";

const TITLE = "Game Over Games | PC Gamer e Consoles em Timbó";
const DESCRIPTION =
  "PC gamer em Timbó, consoles PS4, PS5 e Xbox, jogos, periféricos e manutenção de computador em Timbó e região. Produtos com garantia e atendimento local.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Game Over Games",
          description: DESCRIPTION,
          areaServed: "Timbó e região, Santa Catarina, Brasil",
          sameAs: ["https://www.instagram.com/gameover.games/"],
          makesOffer: [
            "PC Gamer",
            "Consoles PS4, PS5 e Xbox",
            "Jogos",
            "Periféricos",
            "Manutenção de computadores",
          ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Showcase />
        <Trust />
        <PcBuilder />
        <ConsolesSection />
        <Maintenance />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
