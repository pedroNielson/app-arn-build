import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
      <Image src="/images/banner.webp" alt="Vista aérea de usina solar em área rural" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy-950/70" />
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="max-w-2xl font-display text-3xl font-black text-white md:text-5xl">Do projeto à conexão com a rede, a gente cuida de tudo</h2>
        <Button href="#orcamento" size="lg" className="mt-8">Pedir orçamento gratuito</Button>
      </div>
    </section>
  );
}
