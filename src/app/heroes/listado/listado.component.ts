import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Hulk']
  heroeBorrado: string = ''
  borrarHeroe(){
    console.log('borrando...')
    // this.heroeBorrado = this.heroes.splice(0,1).toString()
    this.heroeBorrado = this.heroes.shift()||''
  }

}
