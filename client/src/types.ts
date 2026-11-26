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
  image?: string;
  pdf?: string;
  colors: [string, string];
  ratio: "tall" | "wide" | "square";
}
