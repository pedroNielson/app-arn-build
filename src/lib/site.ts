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

export type ProjectCategory = "Comercial" | "Residencial" | "Rural";
export const projects: {
  title: string;
  category: ProjectCategory;
  city: string;
  kwp: string;
  panels: number;
  savings: string;
  generation: string;
  image: string;
}[] = [
  {
    title: "Prédio comercial",
    category: "Comercial",
    city: "Goiânia - GO",
    kwp: "23,98",
    panels: 44,
    savings: "R$ 35.900",
    generation: "3.190 kWh",
    image: "/images/cases/case-1.webp",
  },
  {
    title: "Condomínio Jardins Atenas",
    category: "Residencial",
    city: "Goiânia - GO",
    kwp: "12,21",
    panels: 22,
    savings: "R$ 17.944",
    generation: "1.567 kWh",
    image: "/images/cases/case-2.webp",
  },
  {
    title: "Fazenda Barreirinha",
    category: "Rural",
    city: "Anápolis - GO",
    kwp: "10,26",
    panels: 19,
    savings: "R$ 8.306",
    generation: "1.314 kWh",
    image: "/images/cases/case-3.webp",
  },
  {
    title: "Escola Caminho para o Futuro",
    category: "Comercial",
    city: "Goiânia - GO",
    kwp: "16,20",
    panels: 30,
    savings: "R$ 20.437",
    generation: "2.135 kWh",
    image: "/images/cases/case-4.webp",
  },
  {
    title: "Condomínio Meridian",
    category: "Residencial",
    city: "Goianésia - GO",
    kwp: "8,33",
    panels: 15,
    savings: "R$ 10.450",
    generation: "1.089 kWh",
    image: "/images/cases/case-5.webp",
  },
  {
    title: "Cliente residencial",
    category: "Residencial",
    city: "Abadia de Goiás - GO",
    kwp: "7,63",
    panels: 14,
    savings: "R$ 10.000",
    generation: "1.013 kWh",
    image: "/images/cases/case-6.webp",
  },
  {
    title: "Bel Fiore Garden Center",
    category: "Comercial",
    city: "Goiânia - GO",
    kwp: "17,44",
    panels: 32,
    savings: "R$ 20.795",
    generation: "2.176 kWh",
    image: "/images/cases/case-7.webp",
  },
  {
    title: "Usina Caicó 1",
    category: "Comercial",
    city: "Goiânia - GO",
    kwp: "31,86",
    panels: 59,
    savings: "R$ 30.000",
    generation: "4.000 kWh",
    image: "/images/cases/case-8.webp",
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
