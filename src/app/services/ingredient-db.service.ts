import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class IngredientDBService {
    constructor(private http: HttpClient) {}

    getIngredientList$(): Observable<any> {
        return this.http
            .get('/api/json/v1/1/list.php', {
                params: { i: 'list' },
            })
            .pipe(pluck('drinks'));
    }
}
