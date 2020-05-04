import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/logger/log.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Animations } from 'src/app/modules/shared/animations/animations';

@Component({
    selector: 'app-forgotpassword',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.scss'],
    animations: [Animations.fade],
})
export class ForgotPasswordComponent implements OnInit {
    email: FormControl;
    form: FormGroup;
    isLoading: Observable<boolean>;
    showForm: boolean = true;
    isEmailSent: boolean = false;

    constructor(public authService: AuthService, private formBuilder: FormBuilder, private log: LogService, private title: Title) {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.form = this.formBuilder.group({
            email: this.email,
        });
        this.isLoading = this.authService.loading;
        this.isLoading.subscribe((isLoading) => {
            if (isLoading) {
                this.showForm = false;
            }
        });
        this.authService.isEmailSent.subscribe((isEmailSent) => {
            if (isEmailSent) {
                this.isEmailSent = true;
                this.log.info('isEmailSent');
            }
        });
    }

    ngOnInit(): void {
        this.title.setTitle('Organizer: Forgot Your Password?');
    }

    public async submit() {
        this.log.info('requesting changepassword link');
        await this.authService.forgotPassword(this.form.value.email);
    }
}
