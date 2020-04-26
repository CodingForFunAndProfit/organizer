import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from 'src/app/entities/action/action';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss'],
    providers: [ActionsService],
})
export class ActionsComponent implements OnInit {
    actions: Action[];
    newAction: Action;
    constructor(private actionService: ActionsService) {
        this.actionService.actionsObs.subscribe(
            (actionsObs) => (this.actions = actionsObs)
        );
        this.newAction = new Action();
    }

    ngOnInit(): void {}

    add() {
        this.actionService.create(this.newAction);
        this.newAction = new Action();
    }

    deleteAction(task: Action) {
        // this.actionService.delete(action.id);
        // this.actions = this.actionService.actions();
    }
    actionsCompleted() {
        // this.actions = this.actions.filter(action => action.done === true);
        // return true;
    }
}
