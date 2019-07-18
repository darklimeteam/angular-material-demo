import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { TablesRoutingModule } from './tables-routing.module';
import { SuperTableComponent } from './components/super-table/super-table.component';
import { WrapTableComponent } from './components/wrap-table/wrap-table.component';


@NgModule({
  declarations: [
    SuperTableComponent,
    WrapTableComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class TablesModule { }
