import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'htm-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss']
})
export class IngredientSearchComponent implements OnInit {

  @Output()
  searchIngredientEvent = new EventEmitter<string>();

  constructor() { }

  searchIngredient(target: any) {
    this.searchIngredientEvent.emit(target.value);
  }

  ngOnInit(): void {
  }

}
