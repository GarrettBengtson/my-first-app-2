import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    standalone: true,
    template: `<h2>Name is {{name}}</h2>`,
    
})

export class UserComponent {
    name = 'bob'
}