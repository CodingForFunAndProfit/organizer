import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    theme: string;
    dark: boolean;

    constructor(private settingsService: SettingsService) {}

    ngOnInit() {
        this.settingsService.theme.subscribe(theme => (this.theme = theme));
        this.settingsService.dark.subscribe(dark => (this.dark = dark));
    }

    changeTheme(event: any): void {
        this.theme = event.value;
        this.settingsService.changeTheme(this.theme);
    }

    changeLight(event: any): void {
        this.dark = event.value;
        this.settingsService.changeLight(this.dark);
    }
}
