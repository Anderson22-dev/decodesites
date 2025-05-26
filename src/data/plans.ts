export interface Plan {
  img: string;
  title: string;
  price: string;
  fullPrice: string;
  descriptions: string[];
}

export const plans: Plan[] = [
  {
    img: "./figma.png",
    title: "Layout no Figma",
    price: "R$ 34,00",
    fullPrice: "R$ 349,00 à vista",
    descriptions: [
      "Construção do design no Figma",
      "Design Personalizado",
      "100% Responsivo",
    ],
  },
  {
    img: "./window.png",
    title: "Criação de Landing Page",
    price: "R$ 69,00",
    fullPrice: "R$ 697,00 à vista",
    descriptions: [
      "Design no Figma e implementação",
      "Design Personalizado",
      "100% Responsivo",
    ],
  },
  {
    img: "./layout.png",
    title: "Site Institucional",
    price: "R$ 259,00",
    fullPrice: "R$ 2597,00 à vista",
    descriptions: [
      "Até 6 páginas no site",
      "Design no Figma e implementação",
      "Design Personalizado",
      "100% Responsivo",
    ],
  },
  {
    img: "./settings.png",
    title: "Site Sob Medida",
    price: "Sob Orçamento",
    fullPrice: "",
    descriptions: [
      "Site Profissional para as necessidades do seu negócio",
      "Design no Figma e implementação",
      "Integrações customizadas",
      "100% Responsivo",
    ],
  },
]; 