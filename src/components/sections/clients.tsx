"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clients, type Client } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo({ c, className }: { c: Client; className?: string }) {
  return (
    <Image
      src={c.logo}
      alt=""
      width={128}
      height={128}
      className={cn("shrink-0 rounded-xl object-cover", className)}
    />
  );
}

export function Clients() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Client | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (selected && !d.open) d.showModal();
    if (!selected && d.open) d.close();
  }, [selected]);

  // A lista é repetida 4x (2 por metade da faixa) para nunca sobrar espaço vazio em telas largas.
  // Só a primeira cópia é lida por leitores de tela e recebe foco.
  const list = (copy: number) => (
    <ul
      key={copy}
      className="flex gap-5 pr-5"
      aria-hidden={copy > 0 || undefined}
    >
      {clients.map((c) => (
        <li key={c.name}>
          <button
            type="button"
            tabIndex={copy > 0 ? -1 : 0}
            onClick={() => setSelected(c)}
            aria-label={`Ver detalhes: ${c.name}`}
            className="flex h-24 w-64 items-center gap-4 rounded-2xl bg-slate-100 px-5 text-left transition-colors hover:bg-slate-200"
          >
            <Logo c={c} className="size-14" />
            <span className="font-semibold leading-tight text-slate-800">
              {c.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );

  const details =
    selected &&
    ([
      selected.kwp && [selected.kwp, "Sistema instalado"],
      selected.since && [selected.since, "Cliente desde"],
    ].filter(Boolean) as string[][]);

  return (
    <section id="clientes" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-black md:text-4xl">
          Quem já economiza com a ARN
        </h2>
        <p className="mt-3 text-slate-600">
          Passe o mouse para pausar e clique para ver os detalhes.
        </p>
      </div>

      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {[0, 1, 2, 3].map(list)}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="client-title"
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        className="m-auto w-[min(92vw,32rem)] rounded-2xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-navy-950/80 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <div className="relative p-8">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-slate-100"
            >
              <X className="size-5" />
            </button>
            <div className="flex items-center gap-4">
              <Logo c={selected} className="size-16" />
              <div>
                <h3
                  id="client-title"
                  className="font-display text-xl font-black"
                >
                  {selected.name}
                </h3>
                {(selected.segment || selected.city) && (
                  <p className="text-sm text-slate-500">
                    {[selected.segment, selected.city]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
              </div>
            </div>
            {details && details.length > 0 && (
              <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {details.map(([v, l]) => (
                  <div key={l} className="rounded-lg bg-slate-100 p-3">
                    <dd className="font-bold">{v}</dd>
                    <dt className="text-xs text-slate-500">{l}</dt>
                  </div>
                ))}
              </dl>
            )}
            {selected.quote ? (
              <blockquote className="mt-6 border-l-4 border-brand pl-4 text-slate-700">
                “{selected.quote}”
              </blockquote>
            ) : (
              <p className="mt-6 text-slate-600">
                Cliente da ARN Soluções Energéticas, com energia solar instalada
                em Goiás.
              </p>
            )}
            <Button
              href="#orcamento"
              onClick={() => setSelected(null)}
              className="mt-8 w-full"
            >
              Quero um projeto assim
            </Button>
          </div>
        )}
      </dialog>
    </section>
  );
}
