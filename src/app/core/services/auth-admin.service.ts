import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class AuthAdminService {

  constructor() { }

  public isAdmin(): boolean {
    return true;
  }
}
