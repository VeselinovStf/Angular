import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from  './event-details.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    EventDetailsComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

