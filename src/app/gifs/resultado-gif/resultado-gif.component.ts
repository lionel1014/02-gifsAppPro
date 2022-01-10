import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado-gif',
  templateUrl: './resultado-gif.component.html',
  styles: [
  ]
})
export class ResultadoGifComponent {

  constructor(private gifsService:GifsService) { }

  
  get resultados() {
    return this.gifsService.resultados;
  }
  

}
