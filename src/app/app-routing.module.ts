import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { WrapTableComponent } from './components/wrap-table/wrap-table.component';


const routes: Routes = [
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'table',
    component: WrapTableComponent
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
