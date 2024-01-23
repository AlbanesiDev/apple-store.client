export interface ProductsInterface {
  id:          number;
  stock:       number;
  category:    string;
  model:       string;
  generation?:  string;
  launch:      string;
  description: string;
  variations:  Variation[];
  color?: Color;
  case_color?: Color;
  strap_color?: Color;
  strap_material?: string[];
  specs?:       Specs;
  cover:       string;
  images:      string[];
}

export interface Color {
  name: string;
  hex:  string;
}

export interface Specs {
  technology:    string;
  display:       Display;
  plataform:     Plataform;
  main_camera:   Camera;
  selfie_camera: Camera;
  battery:       Battery;
}

export interface Battery {
  Type:     string;
  charging: string;
}

export interface Display {
  type:       string;
  size:       number;
  resolution: string;
  protection: string;
}

export interface Camera {
  Single:   string;
  Features: string;
  Video:    string;
}

export interface Plataform {
  os:      string;
  chipset: string;
  cpu:     string;
  gpu:     string;
}

export interface Variation {
  space: string;
  price: number;
}
