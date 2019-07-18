import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapTableComponent } from './components/wrap-table/wrap-table.component';


const routes: Routes = [
  {
    path: '',
    component: WrapTableComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
