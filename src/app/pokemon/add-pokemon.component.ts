
import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: newFunction(),
})
export class AddPokemonComponent implements OnInit{

  pokemon!: Pokemon 

ngOnInit(): void {
  this.pokemon = new Pokemon();
}

}
function newFunction(): string | undefined {
  return `
  <h2 class ="center">Ajouter un pokémon</h2>
  <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `;
}

