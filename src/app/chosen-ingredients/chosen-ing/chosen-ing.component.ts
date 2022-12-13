import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChosenIngService } from 'src/app/services/chosen-ing.service';
import { Ingredient } from 'src/app/ingredient';

@Component({
  selector: 'app-chosen-ing',
  templateUrl: './chosen-ing.component.html',
  styleUrls: ['./chosen-ing.component.scss']
})
export class ChosenIngComponent implements OnInit {

  @Output()
  removeChosenEvent = new EventEmitter<any>();

  ings$ = this.ChosenIngService.getChosenIng$();

  constructor(private ChosenIngService: ChosenIngService) { }

  removeChosen(ing: Ingredient) {
    this.removeChosenEvent.emit(ing);
  }

  ngOnInit(): void {
  }

}
