import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './fake-backend/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './core/services/post.service';
import { MaterialModule } from './modules/material.module';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }),
    MaterialModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
