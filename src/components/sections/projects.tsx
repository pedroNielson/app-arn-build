"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project, type ProjectCategory } from "@/lib/site";
import { brl, cn } from "@/lib/utils";

const filters = [
  "Todos",
  "Comercial",
  "Residencial",
  "Rural",
  "Usina",
] as const;
const sorts = {
  kwp: "Potência",
  generation: "Geração esperada",
  savings: "Economia esperada",
} as const satisfies Partial<Record<keyof Project, string>>;
type SortKey = keyof typeof sorts;
const PAGE = 6;

const num = (n: number, d = 0) =>
  n.toLocaleString("pt-BR", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const [sort, setSort] = useState<SortKey>("kwp");
  const [visible, setVisible] = useState(PAGE);

  const list = projects
    .filter(
      (p) => active === "Todos" || p.category === (active as ProjectCategory),
    )
    .sort((a, b) => b[sort] - a[sort]);

  return (
    <section id="projetos" className="bg-paper py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-black md:text-4xl">
          Alguns de nossos cases
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar projetos"
          >
            {filters.map((f) => (
              <button
                key={f}
                aria-pressed={active === f}
                onClick={() => {
                  setActive(f);
                  setVisible(PAGE);
                }}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                  active === f
                    ? "border-brand bg-brand text-white"
                    : "border-slate-300 bg-white hover:border-brand",
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            Ordenar por
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as SortKey);
                setVisible(PAGE);
              }}
              className="h-10 rounded-full border border-slate-300 bg-white px-4 font-medium text-slate-900"
            >
              {(Object.keys(sorts) as SortKey[]).map((k) => (
                <option key={k} value={k}>
                  {sorts[k]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.slice(0, visible).map((p) => {
            const specs = [
              [`${num(p.kwp, 2)} kWp`, "Potência"],
              [
                `${p.panels} painéis`,
                p.panelW ? `de ${p.panelW} W` : "Instalados",
              ],
              [brl(p.savings), "Economia/mês"],
              [`${num(p.generation)} kWh`, "Geração/mês"],
            ];
            return (
              <article
                key={p.image}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt={`${p.title}: sistema de ${num(p.kwp, 2)} kWp${p.city ? ` em ${p.city}` : ""}`}
                    fill
                    sizes="(min-width:1024px) 384px, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-brand">
                    {p.category}
                  </p>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  {p.city && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                      <MapPin className="size-4" aria-hidden />
                      {p.city}
                    </p>
                  )}
                  <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    {specs.map(([v, l]) => (
                      <div
                        key={l}
                        className={cn(
                          "rounded-lg p-3",
                          l.startsWith(sorts[sort].split(" ")[0])
                            ? "bg-brand/10"
                            : "bg-slate-100",
                        )}
                      >
                        <dd className="font-bold">{v}</dd>
                        <dt className="text-xs text-slate-500">{l}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            );
          })}
        </div>

        {visible < list.length && (
          <div className="mt-10 text-center">
            <Button variant="dark" onClick={() => setVisible((v) => v + PAGE)}>
              Ver mais projetos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
