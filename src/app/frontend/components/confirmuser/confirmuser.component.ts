import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    uuid: string;
    constructor(
        private authService: AuthService,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(
            (params) => (this.uuid = params.confirmationUuid)
        );
    }

    ngOnInit(): void {
        this.authService.confirmUser(this.uuid);
    }
}
