import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // agregar( event: any ){
  agregar(){
    // event.preventDefault() //en angular no hace falta, hay otra forma también
    console.log('Heyyy')
    // console.log(event)
  }

}
