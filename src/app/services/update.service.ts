import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';
import { LogService } from './logger/log.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class UpdateService {
    constructor(private appRef: ApplicationRef, private updates: SwUpdate, private log: LogService, private snackbar: MatSnackBar) {
        this.log.info('Update Service started');

        if (this.updates.isEnabled) {
            this.checkForUpdates();
        } else {
            this.log.warn('Updates are not enabled!');
        }
    }

    private checkForUpdates(): void {
        this.updates.activated.subscribe(() => {
            this.log.info(`Application Update installed!`);
        });
        this.updates.available.subscribe((event) => {
            const snackBarRef = this.snackbar.open('An Update is available.', 'Install');
            snackBarRef.onAction().subscribe(() => {
                this.updates.activateUpdate().then(() => location.reload());
            });
        });

        const appIsStable$ = this.appRef.isStable.pipe(first((isStable) => isStable === true));
        const everySixHours$ = interval(6 * 60 * 60 * 1000);
        const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
        everySixHoursOnceAppIsStable$.subscribe(() => {
            this.updates
                .checkForUpdate()
                .then(() => this.log.info('Checking for updates'))
                .catch(console.error);
        });
    }
}
