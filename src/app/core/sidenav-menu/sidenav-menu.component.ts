import { Component } from '@angular/core';
import { MatListItem, MatListItemIcon, MatListItemTitle, MatNavList } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Section {
  name: string;
  name_icon: string;
  link: string;
}

@Component({
  selector: 'app-sidenav-menu',
  imports: [
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatListItemIcon,
  ],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss'
})
export class SidenavMenuComponent {
  public pages: Section[];

  constructor(
  ) {
    this.pages = [
      { name: "Users list", link: "/user/list", name_icon: "view_headline" },
      { name: "Prices", link: "prices/list", name_icon: "attach_money" },
    ];
  }
}
