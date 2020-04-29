import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Animations } from 'src/app/modules/shared/animations/animations';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/logger/log.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [Animations.fade],
})
export class SignupComponent implements OnInit {
    email: FormControl;
    password: FormControl;
    signupForm: FormGroup;
    isLoading: Observable<boolean>;
    showForm: boolean = true;
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
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
        this.signupForm = this.formBuilder.group({
            email: this.email,
            password: this.password,
        });
        this.isLoading = this.authService.loading;
        this.isLoading.subscribe((isLoading) => {
            if (isLoading) {
                this.showForm = false;
            }
        });

        this.authService.isRegistered.subscribe((isRegistered) => {
            if (isRegistered) {
                // this.router.navigate(['/dashboard']);
                this.log.info('isRegistered');
            }
        });
    }

    ngOnInit(): void {
        this.title.setTitle('Organizer: Signup');
    }

    public async signup() {
        this.log.info('signing up');
        await this.authService.signupUser(this.signupForm.value.email, this.signupForm.value.password);
    }
}
