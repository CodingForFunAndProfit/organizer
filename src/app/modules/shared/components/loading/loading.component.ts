import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
    private loadingSpinner: TemplateRef<any>;
    constructor() {}

    ngOnInit(): void {}
}
