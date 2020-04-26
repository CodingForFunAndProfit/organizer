import { Component, OnInit, Input } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

import { RequestLoaderService } from 'src/app/services/request-loader.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
    @Input() mode?: ProgressBarMode = 'indeterminate';
    @Input() color?: ThemePalette = 'accent';

    on = false;

    sendingRequest: Subject<boolean> = this.requestLoaderService.sendingRequest;

    constructor(private requestLoaderService: RequestLoaderService) {}

    ngOnInit(): void {}

    public toggle() {
        this.on = !this.on;
    }
}
