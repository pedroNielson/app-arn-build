export const site = {
  name: "ARN Soluções Energéticas",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "5562996934200",
  email: "contato@arnenergia.com",
  address: "R. 103, 105 - St. Sul, Goiânia - GO",
  instagram: "https://www.instagram.com/arnenergiasolar/",
  linkedin:
    "https://www.linkedin.com/company/arn-solu%C3%A7%C3%B5es-energ%C3%A9ticas/",
};

export const whatsappUrl = (msg = "Olá, tudo bem? Gostaria de um orçamento.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Municípios", href: "#municipios" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const services = [
  {
    title: "Sistema On Grid",
    desc: "Sistema conectado à rede elétrica. Reduza a conta de luz com créditos de energia junto à concessionária.",
    tag: "Residencial e comercial",
    icon: "Zap",
  },
  {
    title: "Sistema Híbrido",
    desc: "Geração solar com baterias: energia garantida mesmo em quedas da rede.",
    tag: "Mais indicado",
    icon: "BatteryCharging",
    featured: true,
  },
  {
    title: "Eficiência Energética",
    desc: "Estudo e implantação de projetos que otimizam o consumo e reduzem custos operacionais.",
    tag: "Empresas e municípios",
    icon: "Sprout",
  },
  {
    title: "Setor Rural e Agronegócio",
    desc: "Projetos para fazendas, silos, galpões e irrigação, pensados para o retorno no campo.",
    tag: "Agronegócio",
    icon: "Wheat",
  },
  {
    title: "Operação e Manutenção",
    desc: "Monitoramento remoto e manutenção preventiva e corretiva de usinas.",
    tag: "Pós-instalação",
    icon: "Wrench",
  },
  {
    title: "Projetos Especiais",
    desc: "Usinas de grande porte, sistemas off-grid e soluções para demandas industriais.",
    tag: "Indústria",
    icon: "Factory",
  },
] as const;

export const municipalSteps = [
  {
    title: "Levantamento e diagnóstico",
    desc: "Análise das contas de energia de todos os equipamentos públicos para identificar o potencial de economia.",
  },
  {
    title: "Projetos técnicos completos",
    desc: "Projetos para escolas, UBS, câmaras, iluminação pública e demais equipamentos.",
  },
  {
    title: "Homologação junto à Equatorial",
    desc: "Acompanhamos o processo até a conexão com a rede da concessionária.",
  },
];

export const municipalEquipment = [
  "Escolas municipais e estaduais",
  "Unidades Básicas de Saúde (UBS)",
  "Câmaras municipais e prefeituras",
  "Centros esportivos e culturais",
  "Iluminação pública",
  "Sistemas de abastecimento d'água",
];

export type ProjectCategory = "Comercial" | "Residencial" | "Rural" | "Usina";

/**
 * Valores numéricos para permitir ordenação.
 * kwp em kWp · generation em kWh/mês · savings em R$/mês · panelW = potência de cada painel (W).
 */
export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
  city?: string;
  kwp: number;
  panels: number;
  panelW?: number;
  generation: number;
  savings: number;
};

export const projects: Project[] = [
  // Cases antigos: economia original era anual, por isso a divisão por 12
  {
    title: "Prédio comercial",
    category: "Comercial",
    city: "Goiânia - GO",
    kwp: 23.98,
    panels: 44,
    generation: 3190,
    savings: 35900 / 12,
    image: "/images/cases/case-1.webp",
  },
  {
    title: "Condomínio Jardins Atenas",
    category: "Residencial",
    city: "Goiânia - GO",
    kwp: 12.21,
    panels: 22,
    generation: 1567,
    savings: 17944 / 12,
    image: "/images/cases/case-2.webp",
  },
  {
    title: "Fazenda Barreirinha",
    category: "Rural",
    city: "Anápolis - GO",
    kwp: 10.26,
    panels: 19,
    generation: 1314,
    savings: 8306 / 12,
    image: "/images/cases/case-3.webp",
  },
  {
    title: "Escola Caminho para o Futuro",
    category: "Comercial",
    city: "Goiânia - GO",
    kwp: 16.2,
    panels: 30,
    generation: 2135,
    savings: 20437 / 12,
    image: "/images/cases/case-4.webp",
  },
  {
    title: "Condomínio Meridian",
    category: "Residencial",
    city: "Goianésia - GO",
    kwp: 8.33,
    panels: 15,
    generation: 1089,
    savings: 10450 / 12,
    image: "/images/cases/case-5.webp",
  },
  {
    title: "Cliente residencial",
    category: "Residencial",
    city: "Abadia de Goiás - GO",
    kwp: 7.63,
    panels: 14,
    generation: 1013,
    savings: 10000 / 12,
    image: "/images/cases/case-6.webp",
  },
  {
    title: "Bel Fiore Garden Center",
    category: "Comercial",
    city: "Goiânia - GO",
    kwp: 17.44,
    panels: 32,
    generation: 2176,
    savings: 20795 / 12,
    image: "/images/cases/case-7.webp",
  },
  {
    title: "Usina Caicó 1",
    category: "Usina",
    city: "Goiânia - GO",
    kwp: 31.86,
    panels: 59,
    generation: 4000,
    savings: 30000 / 12,
    image: "/images/cases/case-8.webp",
  },
  // Projetos novos (fotos associadas na ordem; revisar se necessário)
  {
    title: "Usina Araguapaz",
    category: "Usina",
    city: "Araguapaz - GO",
    kwp: 52.92,
    panels: 98,
    panelW: 540,
    generation: 6700,
    savings: 7000,
    image: "/images/cases/dji-0002.webp",
  },
  {
    title: "Fábrica Forneria Original",
    category: "Comercial",
    city: "Aparecida de Goiânia - GO",
    kwp: 46.36,
    panels: 76,
    panelW: 610,
    generation: 5300,
    savings: 5600,
    image: "/images/cases/dji-0480.webp",
  },
  {
    title: "Jardins Madri",
    category: "Residencial",
    kwp: 23.56,
    panels: 38,
    panelW: 620,
    generation: 2789,
    savings: 2761.11,
    image: "/images/cases/dji-0024.webp",
  },
  {
    title: "Fazenda Buenos Aires",
    category: "Rural",
    kwp: 25.42,
    panels: 41,
    panelW: 620,
    generation: 3200,
    savings: 3070,
    image: "/images/cases/dji-fly-2024-01-10.webp",
  },
  {
    title: "iGUi Piscinas Anápolis",
    category: "Comercial",
    city: "Anápolis - GO",
    kwp: 59.8,
    panels: 104,
    panelW: 575,
    generation: 7500,
    savings: 6650,
    image: "/images/cases/dji-0860.webp",
  },
  {
    title: "Jardins Atenas",
    category: "Residencial",
    kwp: 16.1,
    panels: 26,
    panelW: 600,
    generation: 1966,
    savings: 2000,
    image: "/images/cases/dji-0915.webp",
  },
  {
    title: "Jardins Mônaco",
    category: "Residencial",
    kwp: 13.2,
    panels: 24,
    panelW: 550,
    generation: 1650,
    savings: 1633.5,
    image: "/images/cases/dji-0964.webp",
  },
  {
    title: "Aldeia do Vale",
    category: "Residencial",
    kwp: 29.4,
    panels: 42,
    panelW: 700,
    generation: 3500,
    savings: 3465,
    image: "/images/cases/whatsapp-2026-11-06.webp",
  },
];

export const segments = [
  {
    title: "Residências",
    desc: "Casas, condomínios e prédios",
    image: "/images/segments/residencial.webp",
    alt: "Telhado residencial com painéis solares visto de cima",
  },
  {
    title: "Empresas",
    desc: "Comércios e serviços em geral",
    image: "/images/segments/empresas.webp",
    alt: "Galpão comercial com painéis solares no telhado",
  },
  {
    title: "Agronegócio",
    desc: "Lazer, pecuária e agricultura",
    image: "/images/segments/agronegocio.webp",
    alt: "Estrutura de painéis solares em área rural",
  },
  {
    title: "Indústrias",
    desc: "De todos os portes",
    image: "/images/segments/industrias.webp",
    alt: "Painéis solares instalados em estrutura industrial",
  },
];

/** Detalhes (segment, city, kwp, since, quote) são opcionais: o modal só mostra o que existir. */
export type Client = {
  name: string;
  logo: string;
  segment?: string;
  city?: string;
  kwp?: string;
  since?: string;
  quote?: string;
};

export const clients: Client[] = [
  { name: "Bel Fiore", logo: "/images/clients/bel-fiore.webp" },
  { name: "Caicó", logo: "/images/clients/caico.webp" },
  { name: "Empório Caseiro", logo: "/images/clients/emporio-caseiro.webp" },
  { name: "Forneria Original", logo: "/images/clients/forneria-original.webp" },
  { name: "iGUi", logo: "/images/clients/igui.webp" },
  { name: "Kron Engenharia", logo: "/images/clients/kron-engenharia.webp" },
];
