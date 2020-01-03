import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.modules'

import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
