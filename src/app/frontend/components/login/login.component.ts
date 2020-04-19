import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    email: FormControl;
    password: FormControl;
    loginForm: FormGroup;
    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.email = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8),
        ]);
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password,
        });
    }

    ngOnInit(): void {}

    public async login() {
        // console.log(this.loginForm);
        const login = await this.authService.login(
            this.loginForm.value.email,
            this.loginForm.value.password
        );
        if (login) {
            this.router.navigate(['/dashboard']);
        }
    }

    public logout() {
        this.authService.logout();
    }
}
