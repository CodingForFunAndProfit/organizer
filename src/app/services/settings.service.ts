import { Injectable } from '@angular/core';
import defaultSettings from '../../assets/default.settings.json';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {
    private defaults: any;

    private _theme: BehaviorSubject<string>;
    public theme: Observable<string>;

    private _dark: BehaviorSubject<boolean>;
    public dark: Observable<boolean>;

    constructor() {
        this.defaults = defaultSettings;

        this._theme = new BehaviorSubject(this.defaults.theme);

        this.theme = this._theme.asObservable();

        this._dark = new BehaviorSubject(this.defaults.dark);
        this.dark = this._dark.asObservable();
    }

    public changeLight(dark: boolean) {
        this._dark.next(dark);
        localStorage.setItem('dark', `${dark}`);
    }

    public changeTheme(theme: string) {
        this._theme.next(theme);
        // localStorage.setItem('theme', theme);
    }

    public get(key: string): any {
        let value = localStorage.getItem(key);
        console.log('LocalStorage: ' + value);
        if (value != null) {
            localStorage.setItem(key, this.defaults[key]);
        } else {
            value = this.defaults[key];
        }
        return value;
    }
}
