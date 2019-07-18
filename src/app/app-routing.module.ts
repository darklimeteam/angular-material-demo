import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { WrapTreeComponent } from './components/wrap-tree/wrap-tree.component';


const routes: Routes = [
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'table',
    loadChildren: './modules/tables/tables.module#TablesModule'
  },
  {
    path: 'tree',
    component: WrapTreeComponent,
  },
  {
    path: '**',
    component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
