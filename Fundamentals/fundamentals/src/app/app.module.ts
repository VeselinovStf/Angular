import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/event-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventAppComponent,
    EventListComponent
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
