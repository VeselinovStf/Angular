import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'child',
  template: `
    <h3>Child Counter: {{counter}}</h3>
    <button class="btn btn-primary" (click)="buttonClicked()">Click Me!</button>
  `
})
export class ChildComponent { 
  @Output() buttonClick = new EventEmitter()
  counter = 0
  
  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }
  
  buttonClicked() {
    this.buttonClick.emit(this.counter)
  }
}