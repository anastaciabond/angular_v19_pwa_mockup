import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { AgGridTableComponent } from '../../shared/ag-grid-table/ag-grid-table.component';

@Component({
  selector: 'app-user-list',
  imports: [
    MatAnchor,
    AgGridTableComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

}
