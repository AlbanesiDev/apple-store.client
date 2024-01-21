import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public isOpen = signal<boolean>(false);

  public toggleSidebar(){
    this.isOpen.set(!this.isOpen());
  }
}
