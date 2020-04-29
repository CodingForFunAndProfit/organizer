import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/modules/shared/animations/animations';
@Component({
    selector: 'app-dominoloader',
    templateUrl: './dominoloader.component.html',
    styleUrls: ['./dominoloader.component.scss'],
    animations: [Animations.fade],
})
export class DominoloaderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
