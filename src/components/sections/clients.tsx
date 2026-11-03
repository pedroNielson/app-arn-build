"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Client, clients } from "@/lib/site";

const initials = (n: string) =>
  n
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function Logo({ c, className }: { c: Client; className?: string }) {
  return c.logo ? (
    <Image
      src={c.logo}
      alt=""
      width={96}
      height={96}
      className={cn("object-contain", className)}
    />
  ) : (
    <span
      aria-hidden
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-navy-900 font-display font-black text-brand",
        className,
      )}
    >
      {initials(c.name)}
    </span>
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

  const group = (hidden: boolean) => (
    <ul className="flex  gap-5 pr-5" aria-hidden={hidden || undefined}>
      {clients.map((c) => (
        <li key={c.name}>
          <button
            type="button"
            tabIndex={hidden ? -1 : 0}
            onClick={() => setSelected(c)}
            aria-label={`Ver detalhes: ${c.name}`}
            className="flex h-24 w-64 items-center gap-4 rounded-2xl bg-slate-100 px-5 text-left transition-colors hover:bg-slate-200"
          >
            <Logo c={c} className="size-12 text-sm" />
            <span className="font-semibold leading-tight text-slate-800">
              {c.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="clientes" className="bg-paper py-20 text-slate-900">
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
          {group(false)}
          {group(true)}
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
              <Logo c={selected} className="size-16 text-xl" />
              <div>
                <h3
                  id="client-title"
                  className="font-display text-xl font-black"
                >
                  {selected.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {selected.segment} · {selected.city}
                </p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-slate-100 p-3">
                <dd className="font-bold">{selected.kwp}</dd>
                <dt className="text-xs text-slate-500">Sistema instalado</dt>
              </div>
              <div className="rounded-lg bg-slate-100 p-3">
                <dd className="font-bold">{selected.since}</dd>
                <dt className="text-xs text-slate-500">Cliente desde</dt>
              </div>
            </dl>
            <blockquote className="mt-6 border-l-4 border-brand pl-4 text-slate-700">
              “{selected.quote}”
            </blockquote>
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
