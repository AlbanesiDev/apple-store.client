import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { IRegions } from '../models/regions.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CountryDataService {
  private http = inject(HttpClient);
  public currentLenguageSig = signal<string>("en");
  public currentCountrySig = signal<string>('');
  public currentCurrencySig = signal<string>("USD");

  public async getCountriesData(): Promise<IRegions[]> {
    try {
      const data$ = this.http.get<IRegions[]>("/assets/data/countries-data.json");
      return await firstValueFrom(data$);
    }
    catch(error: any){
      return error
    }
  }
}
