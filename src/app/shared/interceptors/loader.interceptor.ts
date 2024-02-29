import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private loader: LoaderService) {
    }

    intercept(
        req: HttpRequest<any>, // eslint-disable-line
        next: HttpHandler
    ): Observable<HttpEvent<any>> { // eslint-disable-line
        this.loader.showLoader();
        return next.handle(req).pipe(
            finalize(() => this.loader.hideLoader())
        );
    }

}
