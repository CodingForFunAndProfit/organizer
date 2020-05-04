import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/entities/user/user.entity';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SettingsService } from 'src/app/services/settings.service';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-mainlayout',
    templateUrl: './mainlayout.component.html',
    styleUrls: ['./mainlayout.component.scss'],
})
export class MainlayoutComponent implements OnInit {
    @HostBinding('class') activeThemeCssClass: string;

    private theme: string;
    private dark: boolean;
    user: User;

    constructor(
        public overlayContainer: OverlayContainer,
        private settings: SettingsService,
        private authService: AuthService,
        private title: Title
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

    ngOnInit(): void {
        this.title.setTitle('Organizer: Get it done.');
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
