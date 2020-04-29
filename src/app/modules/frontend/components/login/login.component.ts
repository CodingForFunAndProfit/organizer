import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Animations } from 'src/app/modules/shared/animations/animations';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [Animations.fade],
})
export class LoginComponent implements OnInit {
    email: FormControl;
    password: FormControl;
    loginForm: FormGroup;
    showMessage: boolean = false;
    showSpinner: boolean = false;
    showSuccess: boolean = false;
    showFailure: boolean = false;
    showForm: boolean = true;
    isShown = false;

    loadingMessage: string = 'Sending login request';
    isLoading: Observable<boolean>;

    constructor(public authService: AuthService, private formBuilder: FormBuilder, private title: Title, private router: Router) {
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password,
        });
        this.isLoading = this.authService.loading;

        this.authService.isAuthenticated.subscribe((isAuthenticated) => {
            if (isAuthenticated) {
                this.router.navigate(['/dashboard']);
            }
        });
    }

    ngOnInit(): void {
        this.title.setTitle('Organizer: Login');
    }

    public async login() {
        await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    }

    public logout() {
        this.authService.logout();
    }
}
