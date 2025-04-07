ng generate component home --inline-template --skip-tests

Interfaces are custom data types for your app.

ng generate interface housinglocation

Inputs allow components to share data. The direction of the data sharing is from parent component to child component.

When adding a property binding to a component tag, we use the
[attribute] = "value" syntax to notify Angular that the assigned value should
be treated as a property from the component class and not a string value.

if using ngfor import commonmodule

Angular services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app. To be used by multiple components, a service must be made injectable. Services that are injectable and used by a component become dependencies of that component

Dependency injection is the mechanism that manages the dependencies of an app's components and the services that other components can use.

Routing is the ability to navigate from one component in the application to another. In Single Page Applications (SPA), only parts of the page are updated to represent the requested view for the user.

The Angular Router enables users to declare routes and specify which component should be displayed on the screen if that route is requested by the application.

The routerLink directive enables Angular's router to create dynamic links in the application. The value assigned to the routerLink is an array with two entries: the static portion of the path and the dynamic data.

For the routerLink to work in the template, add a file level import of RouterLink and RouterOutlet from '@angular/router', then update the component imports array to include both RouterLink and RouterOutlet.

ActivatedRoute router feature that enables you to have access to the data about the current route.

In Angular, FormGroup and FormControl are types that enable you to build forms. The FormControl type can provide a default value and shape the form data.

The template now includes an event handler (submit)="submitApplication()". Angular uses parentheses syntax around the event name to define events in the template code.
