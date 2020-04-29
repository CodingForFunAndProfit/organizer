import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/modules/shared/animations/animations';

@Component({
    selector: 'app-circleloader',
    templateUrl: './circleloader.component.html',
    styleUrls: ['./circleloader.component.scss'],
    animations: [Animations.fade],
})
export class CircleloaderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
