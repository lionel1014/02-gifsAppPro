import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial :string[] = [];

  public get historial() : string[] {
    return [...this._historial];
  };

  buscarGif = (query: string = '') =>{

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);//*lo mismo de abajo
    };

    //! Mejor lo de arriba
    // if (this._historial.length > 10) {
    //   this._historial.pop();
    // };

    console.log(this._historial);
  };

}
