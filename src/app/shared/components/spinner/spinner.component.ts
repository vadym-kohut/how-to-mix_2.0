import { Component } from "@angular/core";
import { LoaderService } from "../../services/loader.service";

@Component({
    selector: "htm-spinner",
    templateUrl: "./spinner.component.html",
    styleUrls: ["./spinner.component.scss"]
})
export class SpinnerComponent {

    constructor(public loader: LoaderService) {
    }

}
