import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buscar-gif',
  templateUrl: './buscar-gif.component.html',
  styles: [
  ]
})
export class BuscarGifComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar = () =>{
    const {value} = this.txtBuscar.nativeElement;
    console.log(value);
    this.txtBuscar.nativeElement.value = '';
  };

}
