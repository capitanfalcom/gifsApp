import { Component } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  get resultados() {
    return this.gifsService.resultados;
  }

  abrirLink(url: string){
    window.open(url, "_blank");
  }

  constructor( private gifsService: GifsService ) { }

  

}
