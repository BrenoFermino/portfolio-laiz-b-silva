export type Category = "Acadêmicos" | "Defesas/Clientes" | "Projetos/Oportunidades" | "Criação";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: Category;
  year: number;
  summary: string;
  role: string[];
  results?: string;
  /** Troque por uma URL de imagem real (ex.: "/images/casa-em-cores.jpg") */
  image?: string;
  /** Link opcional para PDF ou material completo do projeto */
  pdf?: string;
  /** Cores do placeholder enquanto não há imagem */
  colors: [string, string];
  ratio: "tall" | "wide" | "square";
}

// CONTEÚDO DE EXEMPLO: substitua pelos projetos reais da Laís.
export const projects: Project[] = [
  {
    id: "localiza-jcdecaux",
    title: "Localiza + JCDecaux",
    client: "Localiza & JCDecaux",
    category: "Defesas/Clientes",
    year: 2025,
    summary:
      "Uma jornada de mobilidade que conecta marcas, pessoas e oportunidades. Proposta de ecossistema de mídia OOH para a Localiza nos territórios estratégicos da JCDecaux — aeroportos, ruas, metrô e retail.",
    role: ["Planejamento estratégico", "Estratégia de mídia", "Apresentação comercial"],
    results: "Material completo disponível no PDF do projeto.",
    image: "/images/projects/localiza-jcdecaux-1.png",
    pdf: "/projects/Localiza_JCDecaux.pdf",
    colors: ["#0B1C1A", "#00C853"],
    ratio: "wide",
  },
  {
    id: "oboticario-jcdecaux",
    title: "O Boticário + JCDecaux",
    client: "O Boticário & JCDecaux",
    category: "Defesas/Clientes",
    year: 2025,
    summary:
      "E se uma estação inteira pudesse virar território de uma marca? Proposta para expandir a presença de O Boticário no metrô — da dominação do túnel da Estação Paulista para uma estação proprietária em Fradique Coutinho.",
    role: ["Planejamento estratégico", "Estratégia de mídia", "Apresentação comercial"],
    results: "Material completo disponível no PDF do projeto.",
    image: "/images/projects/oboticario-jcdecaux-1.png",
    pdf: "/projects/OBoticario_JCDecaux.pdf",
    colors: ["#0A1628", "#7EC8E3"],
    ratio: "wide",
  },
  {
    id: "renner-fim-de-ano",
    title: "Renner Fim de Ano",
    client: "Renner & JCDecaux",
    category: "Defesas/Clientes",
    year: 2025,
    summary:
      "Vista a cidade para o fim do ano. Proposta de mídia OOH para a Renner no período de Natal e Réveillon, conectando moda e intenção de compra ao espaço urbano de São Paulo.",
    role: ["Planejamento estratégico", "Estratégia de mídia", "Apresentação comercial"],
    results: "Material completo disponível no PDF do projeto.",
    image: "/images/projects/renner-fim-de-ano-1.png",
    pdf: "/projects/Renner_Fim_de_Ano_JCDecaux.pdf",
    colors: ["#3A0A12", "#E11D2E"],
    ratio: "wide",
  },
  {
    id: "olla-jcdecaux",
    title: "Olla + JCDecaux",
    client: "Olla & JCDecaux",
    category: "Defesas/Clientes",
    year: 2025,
    summary:
      "A primeira vez não vem com manual. Mas com o OOH, pode vir com informação. Proposta de presença urbana da Olla para construir hábitos seguros e conscientes junto ao público jovem na cidade.",
    role: ["Planejamento estratégico", "Estratégia de mídia", "Apresentação comercial"],
    results: "Material completo disponível no PDF do projeto.",
    image: "/images/projects/olla-jcdecaux-1.png",
    pdf: "/projects/Olla_JCDecaux.pdf",
    colors: ["#1A0A2E", "#C77DFF"],
    ratio: "wide",
  },
  {
    id: "reforma-que-conta", title: "Reforma que conta história", client: "JCDecaux", category: "Criação", year: 2025,
    summary: "Série de conteúdos mostrando o antes e depois de ambientes decorados por clientes.",
    role: ["Planejamento editorial", "Roteiro", "Design de posts"],
    colors: ["#E8553D", "#FFC2A8"], ratio: "square",
  },
  {
    id: "feirao-primavera", title: "Copa do mundo feminina", client: "JCDecaux", category: "Projetos/Oportunidades", year: 2024,
    summary: "Campanha promocional integrada entre loja, redes sociais e mídia local.",
    role: ["Estratégia", "Direção de arte"],
    colors: ["#1F7A5A", "#B6E6CF"], ratio: "wide",
  },
  {
    id: "colecao-outono", title: "Coleção Outono", client: "JCDecaux", category: "Criação", year: 2024,
    summary: "Sistema visual para a coleção sazonal: paleta, tipografia, etiquetas e materiais impressos.",
    role: ["Identidade visual", "Papelaria", "Embalagens"],
    colors: ["#17141F", "#6B5B95"], ratio: "tall",
  },
  {
    id: "showroom", title: "Showroom JCDecaux", client: "JCDecaux", category: "Projetos/Oportunidades", year: 2023,
    summary: "Comunicação visual do showroom: sinalização, vitrines e materiais de apoio à venda.",
    role: ["Projeto gráfico", "Sinalização"],
    colors: ["#C9A227", "#F3E3A3"], ratio: "wide",
  },
  {
    id: "dia-das-maes", title: "Dia das Mães", client: "JCDecaux", category: "Criação", year: 2023,
    summary: "Calendário de conteúdo e peças para a data mais importante do varejo de decoração.",
    role: ["Copywriting", "Design de posts"],
    colors: ["#C2417C", "#F7B6D2"], ratio: "square",
  },
];
