import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import moment from 'moment';

@Component({
    selector: 'app-weighttracker',
    templateUrl: './weighttracker.component.html',
    styleUrls: ['./weighttracker.component.scss'],
})
export class WeighttrackerComponent implements OnInit {
    weightStates = [
        { time: '22.05.2020 9:00', weight: 58.1, unit: 'kg' },
        { time: '22.05.2020 14:00', weight: 59.1, unit: 'kg' },
        { time: '22.05.2020 19:00', weight: 59.2, unit: 'kg' },
    ];
    now: Moment;
    time: Observable<string>;
    constructor() {}

    ngOnInit(): void {
        this.time = interval(1000).pipe(
            map(() => {
                this.now = moment(new Date());
                return this.now.format('HH:mm:ss');
            })
        );
    }
}
