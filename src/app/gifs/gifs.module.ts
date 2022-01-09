import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuscarGifComponent } from './buscar-gif/buscar-gif.component';
import { ResultadoGifComponent } from './resultado-gif/resultado-gif.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BuscarGifComponent,
    ResultadoGifComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
