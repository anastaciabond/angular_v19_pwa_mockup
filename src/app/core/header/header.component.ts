import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public title: string = "Page title";

  constructor(
    private sidenavService: SidenavService,
  ) {
  }

  public toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
