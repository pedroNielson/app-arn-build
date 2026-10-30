import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { segments } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="grid gap-5">
            <h2 className="font-display text-3xl font-black text-white md:text-4xl">Engenharia especializada em energia renovável</h2>
            <p className="text-lg text-white/75">
              A ARN Soluções Energéticas leva ao segmento de energias renováveis atendimento completo e conhecimento técnico, com o compromisso de oferecer as melhores soluções e equipamentos do mercado.
            </p>
            <p className="text-lg text-white/75">Somos especializados em projetos de energia renovável e estudos de eficiência energética.</p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image src="/images/about.webp" alt="Engenheiro da ARN conferindo painéis solares" fill sizes="(min-width:768px) 560px, 100vw" className="object-cover object-[30%_50%]" />
          </div>
        </div>

        <h3 className="mt-24 font-display text-2xl font-black text-white md:text-3xl">Energia solar para cada perfil</h3>
        <Reveal as="ul" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((s) => (
            <li key={s.title} data-reveal className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-[scale] duration-500 ease-out hover:z-10 hover:scale-[1.06]">
              <Image src={s.image} alt={s.alt} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw"
                className="object-cover brightness-[.6] transition-[filter,scale] duration-700 group-hover:scale-110 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h4 className="font-display text-lg font-bold text-white">{s.title}</h4>
                <p className="mt-1 text-sm text-white/80">{s.desc}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
