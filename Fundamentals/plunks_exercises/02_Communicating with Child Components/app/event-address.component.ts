import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-address',
  template: '<span>{{address.address}}, {{address.city}}, {{address.country}}</span>',
})
export class EventAddressComponent { 
  @Input() address
}