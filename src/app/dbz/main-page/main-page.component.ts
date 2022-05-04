import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // personajes: Personaje[]= [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder: 10000
  //   }
  // ];

//  get personajes(): Personaje[]{
//    return this.dbzService.personajes;
//  }

  nuevo: Personaje ={
    nombre: 'Maestro Roshi',
    poder: 10000
  }

  // // agregar( event: any ){
  // agregar(){
  //   // event.preventDefault() //en angular no hace falta, hay otra forma también
  //   // console.log('Heyyy')
  //   // console.log(event)
  //   if(this.nuevo.nombre.trim().length===0){ return; }
  //   console.log(this.nuevo)
  //   this.personajes.push(this.nuevo)
  //   this.nuevo = {
  //     nombre:'',
  //     poder: 0
  //   }
  // }

  // cambiarNombre(event:any){
  //   console.log(event)
  // }

  // agregarNuevoPersonaje( argumento: Personaje ){
    // this.personajes.push( argumento )
  // }

  constructor () {  //inyeccion de dependencias

  }

}
