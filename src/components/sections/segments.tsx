import Image from "next/image";
import { segments } from "@/lib/site";

export function Segments() {
  return (
    <section aria-labelledby="segmentos" className="bg-navy-900 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="segmentos" className="font-display text-3xl font-black text-white md:text-4xl">Energia solar para cada perfil</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((s) => (
            <li key={s.title} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={s.image} alt={s.alt} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-white/75">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
