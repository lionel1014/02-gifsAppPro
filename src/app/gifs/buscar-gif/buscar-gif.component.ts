import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar-gif',
  templateUrl: './buscar-gif.component.html',
  styles: [
  ]
})
export class BuscarGifComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  constructor(private gifsService:GifsService){};

  buscar = () =>{
    if (this.txtBuscar.nativeElement.value.trim().length <= 1) {
      return; //? pregunto si escribe algo mayor a 1 caracter
    }
    const {value} = this.txtBuscar.nativeElement;
    this.gifsService.buscarGif(value);
    this.txtBuscar.nativeElement.value = '';
  };

}
