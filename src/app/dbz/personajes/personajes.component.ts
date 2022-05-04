import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[]=[]
  // @Input('data') personajes: any[]=[] Esto es por si quiero otro nombre
  get personajes (){
    return this.dbzService.personajes;
  }
  constructor ( public dbzService: DbzService ) {  //inyeccion de dependencias

  }

}
