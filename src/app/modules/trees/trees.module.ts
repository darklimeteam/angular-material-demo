import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeModule, MatIconModule, MatButtonModule } from '@angular/material';

import { TreesRoutingModule } from './trees-routing.module';
import { SuperTreeComponent } from './components/super-tree/super-tree.component';
import { WrapTreeComponent } from './components/wrap-tree/wrap-tree.component';
import { SuperNestedTreeComponent } from './components/super-nested-tree/super-nested-tree.component';



@NgModule({
  declarations: [
    SuperTreeComponent,
    SuperNestedTreeComponent,
    WrapTreeComponent,
  ],
  imports: [
    CommonModule,
    TreesRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class TreesModule { }
