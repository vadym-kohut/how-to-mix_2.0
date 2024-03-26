import { BehaviorSubject } from "rxjs";
import { PageEvent } from "@angular/material/paginator";

export interface PaginationOptions {
    length: number;
    pageSizeOptions: number[];
    pageSize$: BehaviorSubject<number>;
    showFirstLastButtons: boolean;
    pageIndex$: BehaviorSubject<number>;
    pageChange: (event: PageEvent) => void;
}
