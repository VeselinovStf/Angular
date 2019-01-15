import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from  './event-details.component'
import { EventAddressComponent } from  './event-address.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventAddressComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

