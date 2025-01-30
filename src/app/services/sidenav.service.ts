import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  // Toggle the sidenav state
  toggle(): void {
    this.sidenav.toggle();
  }

  public open() {
    this.sidenav.open();
  }

  public close() {
    this.sidenav.close();
  }
}
