import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { municipalEquipment, municipalSteps, whatsappUrl } from "@/lib/site";

export function Municipalities() {
  return (
    <section id="municipios" className="bg-navy-900 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">Consultoria técnica para prefeituras</h2>
          <p className="mt-4 text-white/70">
            Auxiliamos gestores municipais em todo o processo de implantação de energia solar em equipamentos públicos, da análise técnica à homologação.
          </p>
          <Reveal as="ol" className="mt-8 grid gap-4">
            {municipalSteps.map((s, i) => (
              <li key={s.title} data-reveal className="flex gap-4 rounded-xl border border-white/10 p-5">
                <span className="font-display text-2xl font-black text-brand">{i + 1}</span>
                <div><h3 className="font-semibold text-white">{s.title}</h3><p className="mt-1 text-sm text-white/60">{s.desc}</p></div>
              </li>
            ))}
          </Reveal>
        </div>
        <aside className="self-start rounded-2xl border border-white/10 bg-navy-800 p-7">
          <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl">
            <Image src="/images/municipios.webp" alt="Telhado de escola com painéis solares" fill sizes="(min-width:1024px) 520px, 100vw" className="object-cover" />
          </div>
          <p className="rounded-lg border border-brand/30 bg-brand/10 p-4 text-sm text-white/85">
            <strong className="block text-brand">Marco legal da energia solar</strong>
            A Lei nº 14.300/2022 facilita e incentiva a geração distribuída e a adoção de energia solar em municípios brasileiros.
          </p>
          <h3 className="mt-6 font-semibold text-white">Equipamentos que atendemos</h3>
          <ul className="mt-3 grid gap-2 text-white/75">
            {municipalEquipment.map((e) => <li key={e} className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-brand" />{e}</li>)}
          </ul>
          <Button href={whatsappUrl("Olá! Sou gestor municipal e gostaria de falar com um especialista.")} target="_blank" rel="noreferrer" className="mt-8 w-full">
            Falar com especialista
          </Button>
        </aside>
      </div>
    </section>
  );
}
