import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user/user.entity';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
    email: string;
    password: string;
    loginForm: FormGroup;

    me: User;

    color: ThemePalette = 'accent';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 50;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            email: '',
            password: '',
        });
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }

    ngOnInit(): void {
        // console.log(this.authService.currentUserValue);
        /*
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
        */
    }

    public async login() {
        // console.log(this.loginForm);
        await this.authService.login(
            this.loginForm.value.email,
            this.loginForm.value.password
        );
        this.router.navigate(['/dashboard']);
    }

    public logout() {
        this.authService.logout();
    }
}
