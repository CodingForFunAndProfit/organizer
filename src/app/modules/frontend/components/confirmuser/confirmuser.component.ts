import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/logger/log.service';

/*
mutation{
  confirmUser(token: "31019528-6aef-4a08-a383-3feda022f80d")
}
*/
@Component({
    selector: 'app-confirmuser',
    templateUrl: './confirmuser.component.html',
    styleUrls: ['./confirmuser.component.scss'],
})
export class ConfirmuserComponent implements OnInit {
    constructor(
        public authService: AuthService,
        private route: ActivatedRoute,
        private log: LogService
    ) {
        this.route.params.subscribe((params) =>
            this.authService.confirmUser(params.confirmationUuid)
        );
    }

    ngOnInit(): void {}
}
