"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { estimate, PROFILES, SOLAR, type Profile } from "@/lib/solar";
import { brl, cn } from "@/lib/utils";

const num = (n: number, d = 0) => n.toLocaleString("pt-BR", { maximumFractionDigits: d, minimumFractionDigits: d });

export function SavingsCalculator() {
  const [bill, setBill] = useState(500);
  const [profile, setProfile] = useState<Profile>("residencial");
  const r = estimate(bill, profile);

  const highlights = [
    [brl(r.annualSavings), "economia no 1º ano"],
    [`~${num(r.paybackYears, 1)} anos`, "retorno do investimento"],
    [brl(Math.round(r.totalSavings / 1000) * 1000), `economia líquida em ${SOLAR.years} anos`],
  ];
  const system = [
    [`${num(r.kwp, 1)} kWp`, "potência do sistema"],
    [`${r.panels}`, "painéis de 550 W"],
    [`${num(r.area)} m²`, "área de telhado"],
    [`${num(r.monthlyKwh)} kWh`, "geração por mês"],
  ];

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl md:p-10">
      <h2 className="font-display text-xl font-black md:text-2xl">Simule sua economia</h2>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-slate-600">Tipo de instalação</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {(Object.keys(PROFILES) as Profile[]).map((p) => (
            <label key={p} className="cursor-pointer">
              <input type="radio" name="profile" value={p} checked={profile === p} onChange={() => setProfile(p)} className="peer sr-only" />
              <span className="block rounded-lg border border-slate-300 px-3 py-2.5 text-center text-sm font-medium transition-colors hover:border-brand peer-checked:border-navy-900 peer-checked:bg-navy-900 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand">
                {PROFILES[p].label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7">
        <label htmlFor="bill" className="text-sm font-medium text-slate-600">Quanto você paga de luz por mês?</label>
        <p className="mt-1 font-display text-4xl font-black md:text-5xl">{brl(bill)}</p>
        <input id="bill" type="range" min={100} max={5000} step={50} value={bill} onChange={(e) => setBill(+e.target.value)} className="mt-4 w-full" />
        <div className="flex justify-between text-xs text-slate-500"><span>R$ 100</span><span>R$ 5.000</span></div>
      </div>

      <div className="mt-7 grid gap-3" aria-label="Comparativo da conta mensal">
        {[
          ["Hoje", bill, 100, "bg-slate-400"],
          ["Com energia solar", r.billAfter, (1 - SOLAR.reduction) * 100, "bg-brand"],
        ].map(([label, value, pct, color]) => (
          <div key={label as string} className="grid grid-cols-[8.5rem_1fr_auto] items-center gap-3 text-sm">
            <span className="text-slate-600">{label}</span>
            <span className="h-3 overflow-hidden rounded-full bg-slate-100">
              <span className={cn("block h-full rounded-full transition-[width] duration-500", color as string)} style={{ width: `${Math.max(pct as number, 3)}%` }} />
            </span>
            <span className="w-20 text-right font-semibold">{brl(value as number)}</span>
          </div>
        ))}
      </div>

      <dl className="mt-7 grid gap-3 sm:grid-cols-3">
        {highlights.map(([v, l]) => (
          <div key={l} className="rounded-xl bg-navy-900 p-4 text-center text-white">
            <dd className="font-display text-lg font-bold text-brand md:text-xl">{v}</dd>
            <dt className="mt-1 text-xs text-white/70">{l}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-5 rounded-xl bg-slate-100 p-4">
        <p className="text-sm font-semibold">Sistema estimado</p>
        <dl className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {system.map(([v, l]) => (
            <div key={l}>
              <dd className="font-bold">{v}</dd>
              <dt className="text-xs text-slate-500">{l}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-slate-600">
          Você deixa de emitir cerca de <strong>{num(r.co2Tons, 1)} t de CO₂ por ano</strong>.
        </p>
      </div>

      <Button href="#orcamento" size="lg" className="mt-6 w-full">Quero meu orçamento gratuito</Button>
      <p className="mt-3 text-xs text-slate-500">
        Estimativa com {SOLAR.reduction * 100}% de redução na conta, tarifa de R$ {num(PROFILES[profile].tariff, 2)}/kWh,
        reajuste de {SOLAR.tariffIncrease * 100}% ao ano e perda de {num(SOLAR.degradation * 100, 1)}% ao ano nos painéis. O valor final depende da visita técnica.
      </p>
    </div>
  );
}
