import { Component } from "@angular/core";

@Component({
    selector: 'event-list',
    templateUrl: 'event-list.component.html'
})

export class EventListComponent {
    title: string = "Upcoming Angular Events";
    event = {
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