import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.scss']
})
export class CocktailSearchComponent implements OnInit {

  @Output()
  searchCocktailEvent = new EventEmitter<string>();

  constructor() { }

  searchCocktail(target: any) {
    this.searchCocktailEvent.emit(target.value);
  }

  ngOnInit(): void {
  }

}
