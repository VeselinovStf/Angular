import { Component } from '@angular/core';

@Component({
    selector: 'event-list',
    template: `
    <div>
    <div>
        <h1>{{title}}</h1>
    </div>
    <hr>
    <event-thumbnail [event]="event1"></event-thumbnail>  
    </div>`
})

export class EventListComponent {
    title: string = 'Upcoming Angular Events';
    event1 = {
        id: 1,
        name: 'Angular Connect',
        time: '9/2/18',
        price: 439.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}