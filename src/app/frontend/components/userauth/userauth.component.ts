import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-userauth',
    templateUrl: './userauth.component.html',
    styleUrls: ['./userauth.component.scss'],
})
export class UserAuthComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }

    ngOnInit(): void {}
}
