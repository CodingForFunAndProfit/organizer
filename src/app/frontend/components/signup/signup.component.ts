import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/logger/log.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    email: FormControl;
    password: FormControl;
    signupForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private log: LogService) {
        this.email = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8),
        ]);
        this.signupForm = this.formBuilder.group({
            email: this.email,
            password: this.password,
        });
    }

    ngOnInit(): void {}

    public async signup() {
        this.log.info('signing up');
    }
}
