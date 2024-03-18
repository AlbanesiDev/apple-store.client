/**
 * Interface for products in an apple-store application.
 */
export interface ProductsInterface {
  /**
   * Unique identifier for the product.
   */
  id: number;
  /**
   * Current stock level for the product.
   */
  stock: number;

  /**
   * Category to which the product belongs.
   */
  category: string;

  /**
   * Model of the product.
   */
  model: string;

  /**
   * Available sizes for the product.
   */
  size: Size[];

  /**
   * Generation of the product (if applicable).
   */
  generation?: string;

  /**
   * Launch date of the product.
   */
  launch: string;

  /**
   * Description of the product.
   */
  description: string;

  /**
   * Variations available for the product.
   */
  variations: Variation[];

  /**
   * Primary color of the product.
   */
  color?: Color;

  /**
   * Color of the product case (if applicable).
   */
  case_color?: Color;

  /**
   * Color of the product strap (if applicable).
   */
  strap_color?: Color;

  /**
   * Material(s) used for the product strap (if applicable).
   */
  strap_material?: string[];

  /**
   * Specifications of the product.
   */
  specs?: Specs;

  /**
   * Cover type of the product.
   */
  cover: string;

  /**
   * URLs of images showcasing the product.
   */
  images: string[];
}

/**
 * Interface for defining a color.
 */
export interface Color {
  /**
   * Name of the color.
   */
  name: string;

  /**
   * Hexadecimal representation of the color.
   */
  hex: string;
}

/**
 * Interface for defining a size option.
 */
export interface Size {
  /**
   * Name of the size.
   */
  name: string;

  /**
   * Screen size (if applicable).
   */
  screen: string;

  /**
   * Starting price for the size.
   */
  from: string;
}

/**
 * Interface for specifying product specifications.
 */
export interface Specs {
  /**
   * Technology used in the product.
   */
  technology: string;

  /**
   * Display specifications of the product.
   */
  display: Display;

  /**
   * Platform specifications of the product.
   */
  platform: Platform;

  /**
   * Main camera specifications of the product.
   */
  main_camera: Camera;

  /**
   * Selfie camera specifications of the product.
   */
  selfie_camera: Camera;

  /**
   * Battery specifications of the product.
   */
  battery: Battery;
}

/**
 * Interface for describing battery specifications.
 */
export interface Battery {
  /**
   * Type of battery used.
   */
  type: string;

  /**
   * Charging mechanism supported.
   */
  charging: string;
}

/**
 * Interface for defining display specifications.
 */
export interface Display {
  /**
   * Type of display.
   */
  type: string;

  /**
   * Size of the display (in inches).
   */
  size: number;

  /**
   * Resolution of the display.
   */
  resolution: string;

  /**
   * Protection mechanism for the display.
   */
  protection: string;
}

/**
 * Interface for specifying camera specifications.
 */
export interface Camera {
  /**
   * Description of the single camera setup.
   */
  Single: string;

  /**
   * Features of the camera.
   */
  Features: string;

  /**
   * Video recording capabilities.
   */
  Video: string;
}

/**
 * Interface for defining platform specifications.
 */
export interface Platform {
  /**
   * Operating system of the platform.
   */
  os: string;

  /**
   * Chipset used in the platform.
   */
  chipset: string;

  /**
   * CPU details of the platform.
   */
  cpu: string;

  /**
   * GPU details of the platform.
   */
  gpu: string;
}

/**
 * Interface for describing product variations.
 */
export interface Variation {
  /**
   * Storage space variant.
   */
  space: string;

  /**
   * Price of the variant.
   */
  price: number;
}
