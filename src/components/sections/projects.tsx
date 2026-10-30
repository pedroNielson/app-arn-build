"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

const filters = ["Todos", "Comercial", "Residencial", "Rural"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const list = projects.filter((p) => active === "Todos" || p.category === (active as ProjectCategory));

  return (
    <section id="projetos" className="bg-paper py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-black md:text-4xl">Alguns de nossos cases</h2>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos">
          {filters.map((f) => (
            <button key={f} aria-pressed={active === f} onClick={() => setActive(f)}
              className={cn("rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                active === f ? "border-brand bg-brand text-white" : "border-slate-300 bg-white hover:border-brand")}>
              {f}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative aspect-[16/10]">
                <Image src={p.image} alt={`${p.title}: sistema de ${p.kwp} kWp em ${p.city}`} fill sizes="(min-width:1024px) 384px, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-brand">{p.category}</p>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-slate-500"><MapPin className="size-4" aria-hidden />{p.city}</p>
                <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {[[`${p.kwp} kWp`, "Potência"], [`${p.panels} painéis`, "Instalados"], [p.savings, "Economia"], [p.generation, "Geração/mês"]].map(([v, l]) => (
                    <div key={l} className="rounded-lg bg-slate-100 p-3"><dd className="font-bold">{v}</dd><dt className="text-xs text-slate-500">{l}</dt></div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
