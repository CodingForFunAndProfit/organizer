import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/logger/log.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Animations } from 'src/app/modules/shared/animations/animations';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.scss'],
    animations: [Animations.fade],
})
export class ChangePasswordComponent implements OnInit {
    password: FormControl;
    form: FormGroup;
    isLoading: Observable<boolean>;
    showForm: boolean = true;
    token: string;
    isSuccess: boolean = false;
    constructor(
        public authService: AuthService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private log: LogService,
        private title: Title
    ) {
        this.route.params.subscribe((params) => {
            this.token = params.token;
        });
        this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
        this.form = this.formBuilder.group({
            password: this.password,
        });
        this.isLoading = this.authService.loading;
        this.isLoading.subscribe((isLoading) => {
            if (isLoading) {
                this.showForm = false;
            }
        });
        this.authService.isChanged.subscribe((isChanged) => {
            if (isChanged) {
                this.isSuccess = true;
                this.log.info('isChanged');
            }
        });
    }

    ngOnInit(): void {
        this.title.setTitle('Organizer: Change Password');
    }

    public async submit() {
        this.log.info('change password request');
        await this.authService.changePassword(this.token, this.form.value.password);
    }
}
