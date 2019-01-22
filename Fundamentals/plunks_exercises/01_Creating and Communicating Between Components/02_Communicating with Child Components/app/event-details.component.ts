import { Component } from '@angular/core';

@Component({
  selector: 'event-details',
  templateUrl: 'app/event-details.component.html'
})
export class EventDetailsComponent {
  event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}
}
