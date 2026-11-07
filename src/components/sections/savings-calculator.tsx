"use client";
import { useEffect, useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import {
  FATURA,
  PREMISSAS,
  simular,
  type Ligacao,
  type Simulacao,
  type TipoInstalacao,
} from "@/lib/simulator";
import { brl, cn } from "@/lib/utils";

const TIPOS: Record<TipoInstalacao, { label: string; nome: string }> = {
  Residencia: { label: "Residência", nome: "residência" },
  Comercio: { label: "Comércio", nome: "comércio" },
  Rural: { label: "Rural", nome: "propriedade rural" },
};
const LIGACOES: { value: Ligacao | null; label: string }[] = [
  { value: "Mono", label: "Monofásica" },
  { value: "Tri", label: "Trifásica" },
  { value: null, label: "Não sei" },
];
const NOME_LIGACAO: Record<Ligacao, string> = {
  Mono: "monofásica",
  Tri: "trifásica",
};

const num = (n: number, d = 0) =>
  n.toLocaleString("pt-BR", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
const retorno = (s: Simulacao) =>
  s.retornoAnos === null
    ? `mais de ${PREMISSAS.anos} anos`
    : `~${num(s.retornoAnos, 1)} anos`;

function mensagemWhatsApp(s: Simulacao) {
  const ligacao = s.ligacaoInformada
    ? NOME_LIGACAO[s.ligacao]
    : `não sei (considerada ${NOME_LIGACAO[s.ligacao]})`;
  return [
    "Olá! Fiz a simulação no site da ARN e quero conversar sobre o meu projeto.",
    "",
    `• Conta de luz: ${brl(s.fatura)}/mês`,
    `• Instalação: ${TIPOS[s.tipo].label} · Ligação: ${ligacao}`,
    `• Sistema: ${s.paineis} painéis de ${PREMISSAS.painelW} W (${num(s.kwp, 2)} kWp)`,
    `• Geração estimada: ${num(s.geracao)} kWh/mês`,
    `• Área de telhado: ~${num(Math.ceil(s.areaM2))} m²`,
    `• Economia no 1º ano: ${brl(s.economia1Ano)} · Retorno: ${retorno(s)}`,
    "",
    "(Valores aproximados gerados pelo simulador.)",
  ].join("\n");
}

function Segmented<T>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-600">{legend}</legend>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {options.map((o) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={cn(
              "rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
              value === o.value
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-slate-300 hover:border-brand",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function SavingsCalculator() {
  const [fatura, setFatura] = useState<number>(FATURA.inicial);
  const [tipo, setTipo] = useState<TipoInstalacao>("Residencia");
  const [ligacao, setLigacao] = useState<Ligacao | null>(null);
  const s = useMemo(
    () => simular(fatura, tipo, ligacao),
    [fatura, tipo, ligacao],
  );

  // Evento para Google Analytics / Meta Pixel (document.addEventListener("arn-simulacao", ...))
  useEffect(() => {
    document.dispatchEvent(new CustomEvent("arn-simulacao", { detail: s }));
  }, [s]);

  const destaques = [
    [brl(s.economia1Ano), "economia no 1º ano"],
    [retorno(s), "retorno do investimento"],
    [brl(s.economiaLiquida), `economia líquida em ${PREMISSAS.anos} anos`],
  ];
  const sistema = [
    [`${num(s.kwp, 2)} kWp`, "potência do sistema"],
    [`${s.paineis}`, `painéis de ${PREMISSAS.painelW} W`],
    [`${num(Math.ceil(s.areaM2))} m²`, "área de telhado"],
    [`${num(s.geracao)} kWh`, "geração por mês"],
  ];
  const pctSolar = Math.max(3, (s.contaComSolar / fatura) * 100);

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl md:p-10">
      <h2 className="font-display text-xl font-black md:text-2xl">
        Simule sua economia
      </h2>

      <div className="mt-6 grid gap-6">
        <Segmented
          legend="Tipo de instalação"
          value={tipo}
          onChange={setTipo}
          options={(Object.keys(TIPOS) as TipoInstalacao[]).map((t) => ({
            value: t,
            label: TIPOS[t].label,
          }))}
        />
        <div>
          <Segmented
            legend="Tipo de ligação do seu padrão de energia"
            value={ligacao}
            onChange={setLigacao}
            options={LIGACOES}
          />
          {!s.ligacaoInformada && (
            <p className="mt-2 text-xs text-slate-500">
              Sem essa informação, consideramos ligação{" "}
              {NOME_LIGACAO[s.ligacao]} para {TIPOS[tipo].nome} com essa conta.
            </p>
          )}
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="fatura" className="text-sm font-medium text-slate-600">
          Quanto você paga de luz por mês?
        </label>
        <p
          className="mt-1 font-display text-4xl font-black tabular-nums md:text-5xl"
          aria-live="polite"
        >
          {brl(fatura)}
        </p>
        <input
          id="fatura"
          type="range"
          min={FATURA.min}
          max={FATURA.max}
          step={FATURA.step}
          value={fatura}
          onChange={(e) => setFatura(+e.target.value)}
          className="mt-4 w-full"
        />
        <div className="flex justify-between text-xs text-slate-500">
          <span>{brl(FATURA.min)}</span>
          <span>{brl(FATURA.max)}</span>
        </div>
      </div>

      <div
        className="mt-7 grid gap-3 text-sm"
        aria-label="Comparativo da conta mensal"
      >
        {(
          [
            ["Hoje", fatura, 100, "bg-slate-400"],
            ["Com energia solar", s.contaComSolar, pctSolar, "bg-brand"],
          ] as const
        ).map(([label, valor, pct, cor]) => (
          <div
            key={label}
            className="grid grid-cols-[8.5rem_1fr_auto] items-center gap-3"
          >
            <span className="text-slate-600">{label}</span>
            <span className="h-3 overflow-hidden rounded-full bg-slate-100">
              <span
                className={cn(
                  "block h-full rounded-full transition-[width] duration-300",
                  cor,
                )}
                style={{ width: `${pct}%` }}
              />
            </span>
            <span className="w-20 text-right font-semibold tabular-nums">
              {brl(valor)}
            </span>
          </div>
        ))}
      </div>

      <dl className="mt-7 grid gap-3 sm:grid-cols-3">
        {destaques.map(([v, l]) => (
          <div
            key={l}
            className="rounded-xl bg-navy-900 p-4 text-center text-white"
          >
            <dd className="font-display text-lg font-bold text-brand tabular-nums md:text-xl">
              {v}
            </dd>
            <dt className="mt-1 text-xs text-white/70">{l}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-5 rounded-xl bg-slate-100 p-4">
        <p className="text-sm font-semibold">Sistema estimado</p>
        <dl className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sistema.map(([v, l]) => (
            <div key={l}>
              <dd className="font-bold tabular-nums">{v}</dd>
              <dt className="text-xs text-slate-500">{l}</dt>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
        <strong>Valores aproximados.</strong> A simulação usa médias de mercado
        (tarifa de R$ {num(PREMISSAS.tarifa, 2)}/kWh, reajuste de{" "}
        {num(PREMISSAS.reajusteAnual * 100)}% ao ano e regras do Fio B) e serve
        só como referência. O orçamento final depende da análise da sua conta de
        luz, do seu telhado e da visita técnica.
      </p>

      <Button
        href={whatsappUrl(mensagemWhatsApp(s))}
        target="_blank"
        rel="noreferrer"
        size="lg"
        className="mt-5 w-full"
      >
        <MessageCircle className="size-5" aria-hidden /> Conversar sobre o meu
        projeto
      </Button>
    </div>
  );
}
