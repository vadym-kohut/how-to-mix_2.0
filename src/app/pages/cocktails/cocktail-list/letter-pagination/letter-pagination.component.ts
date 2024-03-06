import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "htm-letter-pagination",
    templateUrl: "./letter-pagination.component.html",
    styleUrl: "./letter-pagination.component.scss"
})
export class LetterPaginationComponent {

    @Input() firstLetter$ = new Observable<string>();
    @Output() choseFirstLetterEvent = new EventEmitter<string>();

    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    selectFirstLetter(letter: string) {
        this.choseFirstLetterEvent.emit(letter);
    }

}
