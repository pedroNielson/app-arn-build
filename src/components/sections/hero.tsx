import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SavingsCalculator } from "@/components/sections/savings-calculator";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-navy-900 py-16">
      <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/70" />
      <Reveal stagger={0.15} className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h1 data-reveal className="font-display text-4xl font-black leading-[1.08] text-white md:text-6xl">
            Corte até 90% da sua conta de luz
          </h1>
          <p data-reveal className="mt-6 max-w-md text-lg text-white/70">
            Projeto, instalação e homologação completos para casas, empresas, fazendas e prefeituras em Goiás.
          </p>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <Button href="#orcamento" size="lg">Pedir orçamento gratuito</Button>
            <Button href="#projetos" size="lg" variant="outline">Ver projetos</Button>
          </div>
        </div>

        <div data-reveal><SavingsCalculator /></div>
      </Reveal>
    </section>
  );
}
