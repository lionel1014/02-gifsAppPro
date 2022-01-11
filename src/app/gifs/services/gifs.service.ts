import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey     :string = 'l9PlLu4Mo722eeo9TEsYuO13aSACclAM';
  private urlGif        :string = `https://api.giphy.com/v1/gifs`
  // /search?api_key=${this.apiKey}`;
  private _historial :string[] = [];

  public resultados : Gif[] = [];

  public get historial() : string[] {
    return [...this._historial];
  };

  constructor(private http:HttpClient){

    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    };

    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];
    //* otra forma de preguntar
  }

  //* Metodo para volver a cargar la información
  buscarGif = (query: string = '') =>{

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);//*lo mismo de abajo
      //! Mejor lo de arriba
      // if (this._historial.length > 10) {
      //   this._historial.pop();
      // };

      localStorage.setItem('historial', JSON.stringify(this._historial))

    };

    //! tienen que ser los mismos parametros que requiere el API, revisar el POSTMAN
    const params = new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit', '10')
          .set('q',query);

    this.http.get<SearchGifsResponse>(`${this.urlGif}/search`,{params})
      .subscribe((response) => {
        this.resultados = response.data;
        localStorage.setItem('resultados',JSON.stringify(this.resultados));
      });

  };

}
