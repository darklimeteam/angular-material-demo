import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperTableComponent } from './components/super-table/super-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { WrapTableComponent } from './components/wrap-table/wrap-table.component';


const routes: Routes = [
  {
    path: '',
    component: WrapTableComponent,
  }
];

@NgModule({
  declarations: [
    SuperTableComponent,
    WrapTableComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
