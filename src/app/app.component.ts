import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SettingsService } from './services/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Organizer';

    @HostBinding('class') activeThemeCssClass: string;

    private theme: string;
    private dark: boolean;

    constructor(
        public overlayContainer: OverlayContainer,
        private settings: SettingsService
    ) {
        this.settings.theme.subscribe(theme => {
            this.theme = theme;
            this.changeClass();
        });

        this.settings.dark.subscribe(dark => {
            this.dark = dark;
            this.changeClass();
        });
    }
    toggleTheme() {
        this.settings.changeLight(!this.dark);
    }
    changeClass() {
        const mode = this.dark ? 'dark' : 'light';
        const themeClass = this.theme + '-' + mode;
        this.overlayContainer
            .getContainerElement()
            .classList.remove(this.activeThemeCssClass);
        this.overlayContainer.getContainerElement().classList.add(themeClass);
        this.activeThemeCssClass = themeClass;
    }
}
