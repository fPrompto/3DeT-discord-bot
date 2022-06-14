export interface IDesvantagem {
  desvantagens: {
    id: number;
    name: string;
    cost: string;
    description: string;
  }[];
};

export interface IFicha {
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
