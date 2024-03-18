import { Injectable } from "@angular/core";

/**
 * Service for handling browser's local storage.
 * Provides methods to set, get, and remove data in localStorage.
 */
@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  /**
   * Saves a value to localStorage.
   * @param {string} key The key under which to store the value.
   * @param value The value to be stored. Can be any type that is JSON serializable.
   */
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieves a value from localStorage.
   * @param {string} key The key of the value to retrieve.
   * @returns The retrieved value parsed from JSON, or null if the key does not exist.
   */
  public getItem(key: string): any {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  /**
   * Removes a value from localStorage.
   * @param {string} key The key of the value to remove.
   */
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
