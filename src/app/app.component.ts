import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SettingsService } from './services/settings.service';
import { AuthService } from './services/auth.service';
import { User } from './entities/user/user.entity';
import { LogService } from './services/logger/log.service';
import { UpdateService } from './services/update.service';
import { SubscriptionService } from './services/subscription.service';

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
    user: User;

    constructor(
        public overlayContainer: OverlayContainer,
        private log: LogService,
        private settings: SettingsService,
        private authService: AuthService,
        private updateService: UpdateService,
        private subscriptionService: SubscriptionService
    ) {
        this.settings.theme.subscribe((theme) => {
            this.theme = theme;
            this.changeClass();
        });

        this.settings.dark.subscribe((dark) => {
            this.dark = dark;
            this.changeClass();
        });

        this.authService.currentUser.subscribe((user) => (this.user = user));
    }

    toggleTheme() {
        this.settings.changeLight(!this.dark);
    }

    changeClass() {
        const mode = this.dark ? 'dark' : 'light';
        const themeClass = this.theme + '-' + mode;
        this.overlayContainer.getContainerElement().classList.remove(this.activeThemeCssClass);
        this.overlayContainer.getContainerElement().classList.add(themeClass);
        this.activeThemeCssClass = themeClass;
    }

    logoutUser() {
        this.authService.logout();
    }
}
