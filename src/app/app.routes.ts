import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { PricesTableComponent } from './prices/prices-table/prices-table.component';

export const routes: Routes = [
  { path: "", redirectTo: "prices/list", pathMatch: "full" },
  { path: "user/list", component: UserListComponent, data: {title: "Users List"} },
  { path: "user/:id", component: UserDetailComponent, data: {title: "User"} },
  { path: "prices/list", component: PricesTableComponent, data: {title: "Prices Table"} },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule { }
