import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey     :string = 'l9PlLu4Mo722eeo9TEsYuO13aSACclAM';
  private url        :string = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}`;
  private _historial :string[] = [];

  public resultados : any[] = [];

  public get historial() : string[] {
    return [...this._historial];
  };

  constructor(private http:HttpClient){}

  buscarGif = (query: string = '') =>{

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);//*lo mismo de abajo
      //! Mejor lo de arriba
      // if (this._historial.length > 10) {
      //   this._historial.pop();
      // };
    };

    this.http.get(`${this.url}&q=${query}&limit=10`)
      .subscribe((response: any) => {
        console.log(response.data);
        this.resultados = response.data;
      });

  };

}
