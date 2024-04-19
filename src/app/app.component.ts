
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Bob"
  isBlue: boolean = false;
  isRed: boolean = false;

  username = "";

  imageUrl = '';

  changeTheName(){
    this.name = "John"
  }

  updateName(value: string){
    this.name = value;
  }

  changeToRed(){
    this.isRed = true;
    this.isBlue = false;
  }
  changeToBlue(){
    this.isBlue = true;
    this.isRed = false;
  }

  isEmpty(){
    return this.username == "";
  }
  reset(){
    this.username = "Hello World";
  }
}

