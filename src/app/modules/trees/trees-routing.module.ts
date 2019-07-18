import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapTreeComponent } from './components/wrap-tree/wrap-tree.component';


const routes: Routes = [
  {
    path: '',
    component: WrapTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreesRoutingModule { }
