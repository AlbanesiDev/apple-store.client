/**
 * Interface for defining user details.
 */
export interface UsersInterface {
  /**
   * Unique identifier for the user.
   */
  id: number;

  /**
   * Role of the user (e.g., admin, customer).
   */
  role: string;

  /**
   * Authentication token for the user.
   */
  token: string;

  /**
   * Name of the user.
   */
  name: string;

  /**
   * Email address of the user.
   */
  email: string;

  /**
   * Password of the user.
   */
  password: string;

  /**
   * Optional phone number of the user.
   */
  phone?: string;

  /**
   * Optional card number associated with the user.
   */
  card?: string;

  /**
   * Optional address details of the user.
   */
  address?: Address;

  /**
   * Optional list of favorite products for the user.
   */
  favorites?: Favorite[];
}

/**
 * Interface for defining address details.
 */
export interface Address {
  /**
   * Street address.
   */
  street: string;

  /**
   * Suite or apartment number.
   */
  suite: string;

  /**
   * City name.
   */
  city: string;

  /**
   * Zip code of the city.
   */
  zipcode: string;

  /**
   * Geographic coordinates of the address.
   */
  geo: Geo;
}

/**
 * Interface for defining geographic coordinates.
 */
export interface Geo {
  /**
   * Latitude coordinate.
   */
  lat: string;

  /**
   * Longitude coordinate.
   */
  lng: string;
}

/**
 * Interface for representing favorite products.
 */
export interface Favorite {
  /**
   * Unique identifier for the favorite product.
   */
  id: number;

  /**
   * Model of the favorite product.
   */
  model: string;

  /**
   * Category to which the favorite product belongs.
   */
  category: string;

  /**
   * URL of the image showcasing the favorite product.
   */
  image: string;

  /**
   * Link to the favorite product's details.
   */
  link: string;
}
