import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PokemonModel } from '../../model/PokemonModel';
import { PokemonProvider } from '../../providers/pokemon/pokemon';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  private _pokemonList : Array<PokemonModel>;
  
  public get pokemonList() : Array<PokemonModel> {
    return this._pokemonList;
  }

  public set pokemonList(value: Array<PokemonModel>){
    this._pokemonList = value;
  }

  public currentOffset:number = 0;

  constructor(private pokemonProvider: PokemonProvider, private ModCtrl: ModalController) {
    this.loadPokemons();
  }

  private loadPokemons(){
    this.pokemonProvider.getAll(this.currentOffset).subscribe((data) => {
      this.pokemonList = data;
    });
  }

  public onPrevClick(){
    this.currentOffset -= 20;
    this.loadPokemons();
  }

  public onNextClick(){
    this.currentOffset += 20;
    this.loadPokemons();
  }

  public getDetail(id: number){
    console.log(id);
    let modal = this.ModCtrl.create(DetailsPage, {pokemonId: id});
    modal.present();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

}