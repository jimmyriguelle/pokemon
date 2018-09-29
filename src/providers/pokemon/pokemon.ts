import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { PokemonModel } from '../../model/PokemonModel';

/*
  Generated class for the PokemonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonProvider {
  private endPoint: string = "http://pokeapi.salestock.net/api/v2/pokemon/";

  constructor(public http: HttpClient) {}

  public getAll(offset: number = 0): Observable<Array<PokemonModel>>{
    let url = `${this.endPoint}?offset=${offset}`;

    return this.http.get(url)
    .map((data)=>{
      let result = [];
      for (let item of data["results"]) {
        let p = new PokemonModel();
        p.id = parseInt(item["url"].replace(this.endPoint, ""));
        p.name = item["name"];
        result.push(p);
      }
      return result
    })
  }
  public get(id: number): Observable<object>{
    return this.http.get(`${this.endPoint}${id}`).map((data) =>{
      return data;
    })
  }
}
