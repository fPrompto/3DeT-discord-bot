interface IFicha {
  id: number;
  name: string;
  kit: string;
  race: string;
  points: string;
  money: number;
  features: {
    f: number;
    h: string;
    r: number;
    a: number;
    pdf: number;
  };
  hp: {
    current: number;
    total: number;
  };
  mana: {
    current: number;
    total: number;
  };
  vantagens: {
    id: number;
  }[];
  pericias: {
    id: number;
  }[];
  desvantagens: {
    id: number;
  }[];
  magias: {
    id: number;
  }[];
  poderesDosKits: {
    id: number;
  }[];
  itens: {
    id: number;
    quantity: number;
  }[];
};

const ficha: IFicha[] = [
  {
    id: 1,
    name: "Kie Junhg Oren",
    kit: "Pregador",
    race: "Alien(2)",
    points: "10 (-4)",
    money: 0,
    features: { f: 0, h: "2(+1VU)", r: 5, a: 0, pdf: 0 },
    hp: { current: 25, total: 25 },
    mana: { current: 25, total: 25 },
    vantagens: [
      { id: 9 },
      { id: 12 },
      { id: 45 },
      { id: 32 },
      { id: 1 },
    ],
    pericias: [
      { id: 2 },
      { id: 7 },
      { id: 4 },
    ],
    desvantagens: [
      { id: 23 },
      { id: 12 },
      { id: 7 },
      { id: 18 },
      { id: 1 },
    ],
    magias: [
      { id: 12 },
      { id: 1 },
      { id: 6 },
    ],
    poderesDosKits: [
      { id: 12 },
      { id: 1 },
      { id: 6 },
    ],
    itens: [
      { id: 1, quantity: 7 },
    ],
  },
];

