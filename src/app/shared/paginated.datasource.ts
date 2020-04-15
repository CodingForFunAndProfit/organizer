import { Observable, Subject } from 'rxjs';
import { Page, Sort, PaginatedEndpoint } from './pagination';
import { pluck, startWith, switchMap, share } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';

export class PaginatedDataSource<T> implements DataSource<T> {
    private pageNumber = new Subject<number>();
    private pageSize = new Subject<number>();
    private sort = new Subject<Sort<T>>();

    public page$: Observable<Page<T>>;

    constructor(
        endpoint: PaginatedEndpoint<T>,
        initialSort: Sort<T>,
        size = 10
    ) {
        this.page$ = this.sort.pipe(
            startWith(initialSort),
            switchMap((sort) =>
                this.pageNumber.pipe(
                    startWith(0),
                    switchMap((page) => endpoint({ page, sort, size }))
                )
            ),
            share()
        );
    }

    connect(): Observable<T[]> {
        return this.page$.pipe(pluck('content'));
    }

    disconnect(): void {}

    sortBy(sort: Sort<T>): void {
        this.sort.next(sort);
    }

    fetch(page: number): void {
        this.pageNumber.next(page);
    }

    setSize(size: number): void {
        this.pageSize.next(size);
    }
    getSize(): number {
        // return this.pageSize.
        return 20;
    }
}
