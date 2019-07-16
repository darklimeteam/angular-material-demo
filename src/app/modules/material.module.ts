import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCheckboxModule, MatButtonModule,
    MatSidenavModule, MatListModule, MatMenuModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule

    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ]
  })

export class MaterialModule { }