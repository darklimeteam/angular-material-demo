import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './fake-backend/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './core/services/post.service';
import { MaterialModule } from './modules/material.module';
import { NavComponent } from './components/nav/nav.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { TypographyComponent } from './components/typography/typography.component';
import { SuperTableComponent } from './components/super-table/super-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule, MatIconModule, MatButtonModule } from '@angular/material';
import { WrapTableComponent } from './components/wrap-table/wrap-table.component';
import { SuperTreeComponent } from './components/super-tree/super-tree.component';
import { WrapTreeComponent } from './components/wrap-tree/wrap-tree.component';
import { SuperNestedTreeComponent } from './components/super-nested-tree/super-nested-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavComponent,
    PostItemComponent,
    TypographyComponent,
    SuperTableComponent,
    WrapTableComponent,
    SuperTreeComponent,
    WrapTreeComponent,
    SuperNestedTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }),
    MaterialModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
