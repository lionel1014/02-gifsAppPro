import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial :string[] = [];

  public get historial() : string[] {
    return [...this._historial];
  };

  buscarGif = (query: string) =>{

    this._historial.unshift(query);

    if (this._historial.length > 10) {
      this._historial.pop();
    };

    console.log(this._historial);
  };

}
