/**
 * Estimativa simplificada para a calculadora. Todas as premissas ficam aqui:
 * ajuste antes de publicar, pois os números aparecem para o cliente.
 */
export type Profile = "residencial" | "comercial" | "rural" | "industrial";

export const PROFILES: Record<Profile, { label: string; tariff: number }> = {
  residencial: { label: "Residência", tariff: 0.95 }, // R$/kWh
  comercial: { label: "Comércio", tariff: 0.9 },
  rural: { label: "Rural", tariff: 0.8 },
  industrial: { label: "Indústria", tariff: 0.75 },
};

export const SOLAR = {
  reduction: 0.9, // redução média na conta
  kwhPerKwpMonth: 130, // geração média em Goiás
  costPerKwp: 4500, // R$ por kWp instalado
  panelWp: 550, // potência de cada painel
  panelArea: 2.6, // m² por painel
  tariffIncrease: 0.03, // reajuste anual da tarifa
  degradation: 0.005, // perda anual de eficiência dos painéis
  co2PerKwh: 0.08, // kg de CO₂ evitados por kWh
  years: 25,
} as const;

export function estimate(bill: number, profile: Profile) {
  const { tariff } = PROFILES[profile];
  const monthlyKwh = (bill / tariff) * SOLAR.reduction;
  const kwp = monthlyKwh / SOLAR.kwhPerKwpMonth;
  const cost = kwp * SOLAR.costPerKwp;
  const firstYear = bill * 12 * SOLAR.reduction;

  let total = 0;
  let payback: number = SOLAR.years;
  let paid = false;
  for (let y = 0; y < SOLAR.years; y++) {
    const s = firstYear * Math.pow((1 + SOLAR.tariffIncrease) * (1 - SOLAR.degradation), y);
    if (!paid && total + s >= cost) { payback = y + (cost - total) / s; paid = true; }
    total += s;
  }

  const panels = Math.ceil((kwp * 1000) / SOLAR.panelWp);
  return {
    kwp,
    panels,
    area: panels * SOLAR.panelArea,
    monthlyKwh,
    billAfter: bill * (1 - SOLAR.reduction),
    annualSavings: firstYear,
    paybackYears: payback,
    totalSavings: total - cost,
    co2Tons: (monthlyKwh * 12 * SOLAR.co2PerKwh) / 1000,
  };
}
