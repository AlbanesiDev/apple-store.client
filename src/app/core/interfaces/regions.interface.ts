/**
 * Interface for defining regions and their associated countries.
 */
export interface IRegions {
  /**
   * Title of the region.
   */
  title: string;

  /**
   * Array of countries within the region.
   */
  countries: ICountry[];
}

/**
 * Interface for defining country details.
 */
export interface ICountry {
  /**
   * Name of the country.
   */
  country: string;

  /**
   * Language spoken in the country.
   */
  language: string;

  /**
   * Language ISO code.
   */
  lang_iso: string;

  /**
   * Currency used in the country.
   */
  currency: string;

  /**
   * Currency symbol.
   */
  currency_symbol: string;

  /**
   * Conversion rate to a reference currency (e.g., USD).
   */
  conversion_rate: number;
}
