import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/logger/log.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    email: string;
    password: string;
    signupForm: FormGroup;
    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private log: LogService
    ) {
        this.signupForm = this.formBuilder.group({
            signupemail: ['', Validators.required],
            signuppassword: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    public async signup() {
        this.log.info('signing up');
    }
}
