import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { LogService } from 'src/app/services/logger/log.service';
import { LogLevel } from 'src/app/services/logger/loglevel.enum';
import { MatRadioChange } from '@angular/material/radio';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    theme: string;
    dark: boolean;
    loglevel: string;

    constructor(
        private settingsService: SettingsService,
        private log: LogService
    ) {}

    ngOnInit() {
        this.loglevel = this.log.level.toString();
        this.settingsService.theme.subscribe((theme) => (this.theme = theme));
        this.settingsService.dark.subscribe((dark) => (this.dark = dark));
    }

    changeTheme(event: any): void {
        this.theme = event.value;
        this.settingsService.changeTheme(this.theme);
    }

    changeLight(event: any): void {
        this.dark = event.value;
        this.settingsService.changeLight(this.dark);
    }

    changeLoglevel(event: MatRadioChange): void {
        // this.log.info('Changing loglevel event: ', event);
        // console.log(event.source.);
        this.log.level = event.value;
    }
}
