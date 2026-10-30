import * as Icons from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="bg-brand py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl font-display text-3xl font-black text-white md:text-4xl">
          Soluções completas em energia fotovoltaica
        </h2>
        <p className="mt-4 max-w-xl text-white/90">Da residência à usina, do comércio à prefeitura: projetos personalizados e tecnologia de ponta.</p>
        <Reveal className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s) => {
            const Icon = Icons[s.icon as keyof typeof Icons] as Icons.LucideIcon;
            const featured = "featured" in s && s.featured;
            return (
              <article key={s.title} data-reveal className={cn("flex flex-col rounded-2xl p-7 shadow-lg", featured ? "bg-white text-navy-900" : "bg-navy-900 text-white")}>
                <Icon className="text-brand" aria-hidden />
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className={cn("mt-3 flex-1", featured ? "text-slate-600" : "text-white/70")}>{s.desc}</p>
                <p className={cn("mt-6 text-sm font-semibold", featured ? "text-brand-dark" : "text-brand")}>{s.tag}</p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
