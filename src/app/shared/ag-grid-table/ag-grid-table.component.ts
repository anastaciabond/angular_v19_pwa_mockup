import { Component } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';
import {
  ClientSideRowModelModule,
  ColDef,
  ExternalFilterModule,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  QuickFilterModule,
  PaginationModule,
  RowClickedEvent,
} from "ag-grid-community";
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExternalFilterModule,
  QuickFilterModule,
  PaginationModule,
]);

// Row Data Interface
interface IRow {
  login: string;
  email: string;
  wamp_role: string;
  roles: string;
  portfolios: string;
  group: string;
}

@Component({
  selector: 'app-ag-grid-table',
  imports: [
    AgGridAngular,
    FormsModule,
    MatTooltip,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './ag-grid-table.component.html',
  styleUrl: './ag-grid-table.component.scss'
})
export class AgGridTableComponent {
  public externalFilterValue: string = "";

  private gridApi!: GridApi<IRow>;

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { login: "apak@summitalpha.com", email: "apak@summitalpha.com", wamp_role: "client", roles: "System Presets Role", portfolios: "AX Technology-0120", group: "group" },
    { login: "Tesla", email: "email Y", wamp_role: "value", roles: "value", portfolios: "value", group: "wwwvalue" },
    { login: "Ford", email: "F-Series", wamp_role: "value", roles: "value", portfolios: "value", group: "xxxvalue" },
    { login: "Toyota", email: "Corolla", wamp_role: "value", roles: "value", portfolios: "value", group: "zzzvalue" },
    { login: "Mercedes", email: "EQA", wamp_role: "value", roles: "value", portfolios: "value", group: "qqqvalue" },
    { login: "Fiat", email: "500", wamp_role: "value", roles: "value", portfolios: "value", group: "eeevalue" },
    { login: "Nissan", email: "Juke", wamp_role: "value", roles: "value", portfolios: "value", group: "aaavalue" },
    { login: "apak@summitalpha.com", email: "apak@summitalpha.com", wamp_role: "client", roles: "System Presets Role", portfolios: "AX Technology-0120", group: "group" },
    { login: "Tesla", email: "email Y", wamp_role: "value", roles: "value", portfolios: "value", group: "wwwvalue" },
    { login: "Ford", email: "F-Series", wamp_role: "value", roles: "value", portfolios: "value", group: "xxxvalue" },
    { login: "Toyota", email: "Corolla", wamp_role: "value", roles: "value", portfolios: "value", group: "zzzvalue" },
    { login: "Mercedes", email: "EQA", wamp_role: "value", roles: "value", portfolios: "value", group: "qqqvalue" },
    { login: "Fiat", email: "500", wamp_role: "value", roles: "value", portfolios: "value", group: "eeevalue" },
    { login: "Nissan", email: "Juke", wamp_role: "value", roles: "value", portfolios: "value", group: "aaavalue" },
    { login: "apak@summitalpha.com", email: "apak@summitalpha.com", wamp_role: "client", roles: "System Presets Role", portfolios: "AX Technology-0120", group: "group" },
    { login: "Tesla", email: "email Y", wamp_role: "value", roles: "value", portfolios: "value", group: "wwwvalue" },
    { login: "Ford", email: "F-Series", wamp_role: "value", roles: "value", portfolios: "value", group: "xxxvalue" },
    { login: "Toyota", email: "Corolla", wamp_role: "value", roles: "value", portfolios: "value", group: "zzzvalue" },
    { login: "Mercedes", email: "EQA", wamp_role: "value", roles: "value", portfolios: "value", group: "qqqvalue" },
    { login: "Fiat", email: "500", wamp_role: "value", roles: "value", portfolios: "value", group: "eeevalue" },
    { login: "Nissan", email: "Juke", wamp_role: "value", roles: "value", portfolios: "value", group: "aaavalue" },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    {
      field: "login",
    },
    { field: "email" },
    { field: "wamp_role" },
    { field: "roles" },
    { field: "portfolios" },
    { field: "group" },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  constructor(private router: Router) {
  }

  public onFilterTextBoxChanged(value: string) {
    //this.gridApi.setGridOption("quickFilterText", (document.getElementById("filter-text-box") as HTMLInputElement).value);
    this.gridApi.setGridOption("quickFilterText", value);
  }

  public clearFilter(value: string): void {
    this.onFilterTextBoxChanged(value);
    this.externalFilterValue = "";
  }

  public onGridReady(params: GridReadyEvent<IRow>) {
    this.gridApi = params.api;
  }

  public onRowClicked(event: RowClickedEvent) {
    console.log("Row was clicked");
    this.router.navigate(["/user/:id"])
      .catch((error: Error) => {
        console.error(error);
      });
  }
}
