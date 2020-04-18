import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    loginForm: FormGroup;
    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

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
