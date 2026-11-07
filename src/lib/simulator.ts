/**
 * Simulador de economia solar da ARN.
 * Cálculo definido pelo engenheiro responsável. Para atualizar preços e premissas,
 * substitua o objeto PREMISSAS pelo texto gerado em "Copiar premissas" no simulador interno.
 */

export type TipoInstalacao = "Residencia" | "Comercio" | "Rural";
export type Ligacao = "Mono" | "Tri";

export const PREMISSAS = {
  iluminacaoPublica: 40, // R$/mês fixo na conta
  tarifa: 1.2, // R$/kWh
  reajusteAnual: 0.07,
  sobredimensionamento: 0.1,
  painelW: 620,
  painelLarguraM: 1.134,
  painelAlturaM: 2.384,
  geracaoPorPainel: 77.5, // kWh/mês por painel
  simultaneidade: 0.3, // parte do consumo usada no momento da geração
  fioBAno1: 0.18,
  fioBPctPorAno: [0.6, 0.75, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
  /** Ligação suposta quando o cliente não sabe: [conta máxima, ligação] */
  suposicao: {
    Residencia: [
      [1500, "Mono"],
      [1e12, "Tri"],
    ],
    Comercio: [
      [1950, "Mono"],
      [1e12, "Tri"],
    ],
    Rural: [[1e12, "Mono"]],
  } as Record<TipoInstalacao, [number, Ligacao][]>,
  taxaMinimaKwh: { Mono: 30, Tri: 100 } as Record<Ligacao, number>,
  /** Curva de preço R$/Wp em função da potência */
  curva: { a: 2.37920772, b: -1.75411846, c: 15.93407748, piso: 2.33 },
  wpManual: { 4: 3.85 } as Record<number, number>,
  ajustePrecoPct: 0,
  anos: 10,
};

export type Premissas = typeof PREMISSAS;

export const FATURA = { min: 350, max: 5000, step: 50, inicial: 500 } as const;

const round2 = (v: number) => Math.round(v * 100) / 100;

/** Preço por Wp: valor manual para kits específicos ou curva a + b/kWp + c/kWp², com piso. */
export function precoWp(
  paineis: number,
  kwp: number,
  P: Premissas = PREMISSAS,
) {
  const fator = 1 + P.ajustePrecoPct / 100;
  const manual = P.wpManual[paineis];
  let v: number;
  if (manual != null) {
    v = manual;
  } else {
    const { a, b, c, piso } = P.curva;
    const kmin = b < 0 ? (-2 * c) / b : Infinity; // ponto mínimo da curva
    v =
      kwp <= kmin
        ? round2(Math.max(a + b / kwp + c / (kwp * kwp), piso))
        : piso;
  }
  return round2(v * fator);
}

export function ligacaoSuposta(
  fatura: number,
  tipo: TipoInstalacao,
  P: Premissas = PREMISSAS,
): Ligacao {
  return P.suposicao[tipo].find(([max]) => fatura <= max)?.[1] ?? "Tri";
}

export type Simulacao = ReturnType<typeof simular>;

export function simular(
  fatura: number,
  tipo: TipoInstalacao,
  ligacaoInformada: Ligacao | null,
  P: Premissas = PREMISSAS,
) {
  const consumo = (fatura - P.iluminacaoPublica) / P.tarifa; // kWh/mês
  // toFixed evita que erro de ponto flutuante (ex.: 6.0000001) adicione um painel a mais
  const paineis = Math.ceil(
    +((consumo * (1 + P.sobredimensionamento)) / P.geracaoPorPainel).toFixed(6),
  );
  const kwp = (paineis * P.painelW) / 1000;
  const wp = precoWp(paineis, kwp, P);
  const valorProjeto = kwp * 1000 * wp;

  const ligacao = ligacaoInformada ?? ligacaoSuposta(fatura, tipo, P);
  const kwhMin = P.taxaMinimaKwh[ligacao];
  const compensado = consumo * (1 - P.simultaneidade);
  const fioBCheio = P.fioBAno1 / P.fioBPctPorAno[0];

  let acumulado = 0;
  let retornoAnos: number | null = null;
  let contaComSolar = 0;
  let economia1Ano = 0;

  for (let n = 0; n < P.anos; n++) {
    const f = (1 + P.reajusteAnual) ** n;
    const tarifa = P.tarifa * f;
    const fioB = compensado * fioBCheio * P.fioBPctPorAno[n] * f;
    const conta = Math.max(fioB, kwhMin * tarifa) + P.iluminacaoPublica;
    const economiaAno = 12 * (consumo * tarifa + P.iluminacaoPublica - conta);
    if (n === 0) {
      contaComSolar = conta;
      economia1Ano = economiaAno;
    }
    const antes = acumulado;
    acumulado += economiaAno;
    if (retornoAnos === null && acumulado >= valorProjeto)
      retornoAnos = n + (valorProjeto - antes) / economiaAno;
  }

  return {
    fatura,
    tipo,
    ligacao,
    ligacaoInformada: ligacaoInformada !== null,
    consumo,
    paineis,
    kwp,
    wp,
    valorProjeto,
    geracao: paineis * P.geracaoPorPainel,
    areaM2: paineis * P.painelLarguraM * P.painelAlturaM,
    contaComSolar,
    economia1Ano,
    retornoAnos,
    economiaLiquida: acumulado - valorProjeto,
  };
}
