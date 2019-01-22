# Communicating with Child Components
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: The event details page is displaying information about an event, including the address.
Create a child component that will handle displaying the address and pass the event's location in to 
your new address component from the event-details component. To do this you will need to:

_HINT:_ Don't name your element `<address>`. `<address>` is an existing HTML5 element. While it will work,
you may run into styling or other problems.

1. Create a new address component that has an input property for the address data

1. Add the new component to the app module (app/app.module.ts)

1. Update the event-details compoenent (app/event-details.component.ts) to pass the address in to your new component

A finished version of this exercise is available here for reference: https://plnkr.co/edit/ypFJQFFwxv9tms5sZAsp?p=info
