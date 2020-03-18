import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UserService],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    loginForm: FormGroup;

    color: ThemePalette = 'accent';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 50;
    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder
    ) {
        this.loginForm = this.formBuilder.group({
            email: '',
            password: '',
        });
    }

    ngOnInit(): void {}

    public login() {
        this.userService.login(this.email, this.password);
    }
    onSubmit() {
        // Process checkout data here
        // this.items = this.cartService.clearCart();
        // this.checkoutForm.reset();
        /*
        this.userService.login(
            this.checkoutForm.get('email'),
            this.checkoutForm.get('password')
        );
*/
        // console.warn('Your order has been submitted', loginData);
    }
}
