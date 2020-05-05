import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';
import { LogService } from './logger/log.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class UpdateService {
    constructor(appRef: ApplicationRef, updates: SwUpdate, private log: LogService, private snackbar: MatSnackBar) {
        this.log.info('Update Service started');
        if (updates.isEnabled) {
            updates.activated.subscribe(() => {
                this.log.info(`Application Update installed!`);
            });
            updates.available.subscribe((event) => {
                const snackBarRef = snackbar.open('An Update is available.', 'Install');
                snackBarRef.onAction().subscribe(() => {
                    updates.activateUpdate().then(() => location.reload());
                });
            });

            const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable === true));
            const everySixHours$ = interval(6 * 60 * 60 * 1000);
            const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
            everySixHoursOnceAppIsStable$.subscribe(() => {
                updates
                    .checkForUpdate()
                    .then(() => this.log.info('Checking for updates'))
                    .catch(console.error);
            });
        } else {
            this.log.warn('Updates are not enabled!');
        }
    }
}
