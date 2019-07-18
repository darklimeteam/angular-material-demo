import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowDragDropRoutingModule } from './show-drag-drop-routing.module';

import { SuperDragDropComponent } from './components/super-drag-drop/super-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WrapDragDropComponent } from './components/wrap-drag-drop/wrap-drag-drop.component';


@NgModule({
  declarations: [
    SuperDragDropComponent,
    WrapDragDropComponent,
  ],
  imports: [
    CommonModule,
    ShowDragDropRoutingModule,
    DragDropModule,
  ]
})
export class ShowDragDropModule { }
