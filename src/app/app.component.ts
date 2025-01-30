import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from "./core/header/header.component";
import { SidenavMenuComponent } from "./core/sidenav-menu/sidenav-menu.component";
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MatSidenavModule,
    SidenavMenuComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild("sidenav") public sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
  ) {}

  public ngAfterViewInit():void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
