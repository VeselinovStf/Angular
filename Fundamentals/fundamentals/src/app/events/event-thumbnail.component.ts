import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `  
    <div class="well hoverwell thumbnail ">
        <h2>{{event.name}}</h2>
        <div>Data: {{event.data}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{ event.price }}</div>
        <div>Location: {{event.location.address}}, {{event.location.city}}, {{event.location.country}}</div>
    </div>`,
    styles: [
        ".thumbnail { min-height: 210px}"
    ]
})

export class EventThumbnailComponent {
    @Input() event: any
}
