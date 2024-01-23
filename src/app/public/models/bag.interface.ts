export interface BagInterface {
  id: number;
  model: string;
  description: string;
  price?: string;
  variations?:  Variation[];
  color?: Color;
  case_color?: Color;
  strap_color?: Color;
  strap_material?: string[];
  size?: string[];
  space?: string[];
  cover: string;
  images: string[];
}

export interface Color {
  name: string;
  hex: string;
}

export interface Variation {
  space: string;
  price: number;
}
