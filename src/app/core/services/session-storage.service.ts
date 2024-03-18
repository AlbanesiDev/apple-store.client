import { Injectable } from "@angular/core";

/**
 * Service for handling browser's session storage.
 * Provides methods to set, get, and remove data in sessionStorage.
 */
@Injectable({
  providedIn: "root",
})
export class SessionStorageService {
  /**
   * Saves a value to sessionStorage.
   * @param {string} key The key under which to store the value.
   * @param value The value to be stored. Can be any type that is JSON serializable.
   */
  public setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieves a value from sessionStorage.
   * @param {string} key The key of the value to retrieve.
   * @returns The retrieved value parsed from JSON, or null if the key does not exist.
   */
  public getItem(key: string): any {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  /**
   * Removes a value from sessionStorage.
   * @param {string} key The key of the value to remove.
   */
  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
