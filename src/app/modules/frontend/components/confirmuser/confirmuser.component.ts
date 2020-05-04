import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/logger/log.service';
import { Animations } from 'src/app/modules/shared/animations/animations';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-confirmuser',
    templateUrl: './confirmuser.component.html',
    styleUrls: ['./confirmuser.component.scss'],
    animations: [Animations.fade],
})
export class ConfirmuserComponent implements OnInit {
    constructor(public authService: AuthService, private route: ActivatedRoute, private log: LogService, private title: Title) {
        this.route.params.subscribe((params) => this.authService.confirmUser(params.confirmationUuid));
    }

    ngOnInit(): void {
        this.title.setTitle('Organizer: Confirm User');
    }
}
