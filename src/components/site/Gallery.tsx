/**
 * GALERIA — substitua os imports abaixo pelas fotos reais da loja.
 * Basta trocar o arquivo em src/assets e manter a mesma estrutura.
 */
import setup1 from "@/assets/setup-1.jpg";
import setup2 from "@/assets/setup-2.jpg";
import setup3 from "@/assets/setup-3.jpg";
import pcGamer from "@/assets/pc-gamer.jpg";
import perifericos from "@/assets/perifericos.jpg";
import consoles from "@/assets/consoles.jpg";

const GALLERY = [
  { src: setup1, alt: "Setup gamer com iluminação azul", span: "sm:col-span-2 sm:row-span-2" },
  { src: pcGamer, alt: "PC gamer montado", span: "" },
  { src: perifericos, alt: "Periféricos gamer", span: "" },
  { src: consoles, alt: "Console e controle", span: "" },
  { src: setup2, alt: "Interior de PC gamer", span: "" },
  { src: setup3, alt: "Controle em uso na sala", span: "sm:col-span-2" },
];

export function Gallery() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="eyebrow">Galeria</span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
          Setups, montagens e produtos
        </h2>

        <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
