import { Component } from '@angular/core';


// @Component({
//     selector: 'app-contador',
//     template: `
//     <h1> {{titulo}} </h1>
//     <h3> La base es <strong> 5 </strong> </h3>

//     <!-- <button (click)="numero=numero+1;">+1</button> -->
//     <!-- <button (click)="sumar()">+1</button> -->
//     <!-- <button (click)="acumular(+1)">+1</button> -->
//     <!-- <button (click)="acumular(+this.base)">{{base}}</button> -->
//     <button (click)="acumular(base)">{{base}}</button>
//     <span> {{numero}} </span>
//     <!-- <button (click)="numero=numero-1;">-1</button> -->
//     <!-- <button (click)="restar();">-1</button> -->
//     <!-- <button (click)="acumular(-1);">-1</button> -->
//     <!-- <button (click)="acumular(-this.base);">-{{base}}</button> -->
//     <button (click)="acumular(-base);">-{{base}}</button>
    
//     `
// })
@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
  
  })

export class ContadorComponent {
    public titulo: string = 'Contador App';
    numero: number = 10;
    // sumar(){
    //   this.numero+=1;
    // }
    // restar(){
    //   this.numero-=1;
    // }
    base: number = 5;
    acumular(valor:number){
      this.numero+=valor;
    };
}