import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapDragDropComponent } from './components/wrap-drag-drop/wrap-drag-drop.component';


const routes: Routes = [
  {
    path: '',
    component: WrapDragDropComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowDragDropRoutingModule { }
