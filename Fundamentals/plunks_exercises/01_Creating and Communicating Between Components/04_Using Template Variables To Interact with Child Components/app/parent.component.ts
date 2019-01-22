import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <child #child></child>
    <button class="btn btn-primary" (click)="child.stopTimer()">Stop Timer</button>
  `
})
export class ParentComponent {
  
}
