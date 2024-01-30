import { Component } from "@angular/core";
import { LoaderService } from "../../services/loader.service";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CommonModule } from "@angular/common";

@Component({
    selector: "htm-spinner",
    templateUrl: "./spinner.component.html",
    styleUrls: ["./spinner.component.scss"],
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule]
})
export class SpinnerComponent {

    constructor(public loader: LoaderService) {
    }

}
