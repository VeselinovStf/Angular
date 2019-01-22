# Using Local Variables To Interact With Child Components
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: This project contains a parent component (app/parent.component.ts) and a child component
(app/child.component.ts). The child component has a timer that is constantly running and a stopTimer() method
that will stop the timer from running. Using local variables, call the child component's stopTimer() method
from the parent component when the parent component's "Stop Timer" button is clicked. To do this:

1. Add a local variable to the `<child>` element in the parent component's template
1. Add a click binding to the parent's "Stop Timer" button that uses the local variable to call
   the child's `stopTimer()` method.

A finished version of this exercise is available here for reference: https://plnkr.co/edit/OuYs9E9bhoaBLwyCmUJL?p=info
