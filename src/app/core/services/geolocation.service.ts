import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { environment } from "../../../environments/environment.prod";

/**
 * Service to manage geolocation data.
 * @Injectable marks the class as one that participates in the dependency injection system.
 */
@Injectable({
  providedIn: "root",
})
export class GeolocationService {
  // Dependency injection
  private http = inject(HttpClient);
  private localStorageService = inject(LocalStorageService);

  // API keys
  private coorApiKey = environment.COORDINATES_API;
  private ipApiKey = environment.IP_API;

  // Key for local storage
  private keyStorage = "userCountry";

  // Signal to store user region data
  public userRegionDataSig = signal<string[] | null>(null);
  // Signal to error message
  public errorMessageSig = signal<string | undefined>(undefined);

  /**
   * Retrieves the user's country information.
   * First checks local storage, then tries to get geolocation coordinates,
   * and falls back to IP geolocation if necessary.
   */
  public getCountry(): void {
    const userRegionDataLS = this.localStorageService.getItem(this.keyStorage);
    if (userRegionDataLS !== null) {
      this.userRegionDataSig.set(userRegionDataLS);
    } else {
      this.getCoordinates();
    }
  }

  /**
   * Gets the user's geolocation coordinates.
   */
  private getCoordinates(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => this.#onSuccess(position),
      (error) => this.#onError(error),
    );
  }

  /**
   * Success callback for geolocation.
   * Sends coordinates to getCountryWithBrowser method.
   * @param {GeolocationPosition} position - The position object returned by geolocation.
   */
  #onSuccess(position: GeolocationPosition): void {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.#getCountryWithBrowser(latitude, longitude);
  }

  /**
   * Error callback for geolocation.
   * Handles errors and falls back to IP geolocation.
   * @param {GeolocationPositionError} error - The error object returned by geolocation.
   */
  #onError(error: GeolocationPositionError): void {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.errorMessageSig.set("User denied the request for Geolocation.");
        this.#getCountryWithIp();
        break;
      case error.POSITION_UNAVAILABLE:
        this.errorMessageSig.set("Location information is unavailable.");
        this.#getCountryWithIp();
        break;
      case error.TIMEOUT:
        this.errorMessageSig.set("The request to get user location timed out.");
        this.#getCountryWithIp();
        break;
    }
  }

  /**
   * Retrieves country information using browser geolocation data.
   * @param {number} latitude - The latitude coordinate.
   * @param {number} longitude - The longitude coordinate.
   */
  async #getCountryWithBrowser(latitude: number, longitude: number): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.http.get<any>(this.coorApiKey + `?lat=${latitude}&lon=${longitude}&format=json`),
      );
      // return response
    } catch (error: any) {
      this.errorMessageSig.set(error);
      this.#getCountryWithIp();
    }
  }

  /**
   * Retrieves country information using IP geolocation.
   */
  async #getCountryWithIp(): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.get<any>(this.ipApiKey));
      const { country_name, currency, currency_name, languages, country_calling_code } = response;
      this.#setCountry({ country_name, currency, currency_name, languages, country_calling_code });
    } catch (error: any) {
      this.errorMessageSig.set(error);
    }
  }

  /**
   * Stores country data in local storage.
   * @param {any} data - The data to store.
   */
  #setCountry(data: any): void {
    this.localStorageService.setItem(this.keyStorage, data);
  }
}
