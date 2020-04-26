import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
} from '@angular/forms';
import { trigger, transition, animate, style } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/logger/log.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [
        trigger('loader', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
        ]),
        trigger('formdiv', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
        ]),
    ],
})
export class SignupComponent implements OnInit {
    email: FormControl;
    password: FormControl;
    signupForm: FormGroup;
    isLoading: Observable<boolean>;
    constructor(
        public authService: AuthService,
        private formBuilder: FormBuilder,
        private log: LogService,
        private title: Title,
        private router: Router
    ) {
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
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
        this.isLoading = this.authService.loading;
    }

    ngOnInit(): void {
        this.title.setTitle('Organizer: Signup');
    }

    public async signup() {
        this.log.info('signing up');
    }
}
