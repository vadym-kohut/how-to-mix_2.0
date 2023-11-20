import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientDetails } from "../../shared/models/ingredient.model";

@Component({
  selector: 'app-chosen-ing',
  templateUrl: './chosen-ing.component.html',
  styleUrls: ['./chosen-ing.component.scss']
})
export class ChosenIngComponent implements OnInit {

  @Output()
  removeChosenEvent = new EventEmitter<any>();

  constructor() { }

  removeChosen(ing: IngredientDetails) {
    this.removeChosenEvent.emit(ing);
  }

  ngOnInit(): void {
  }

}
