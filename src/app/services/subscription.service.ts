import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { LogService } from './logger/log.service';
import gql from 'graphql-tag';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { AuthService } from './auth.service';

interface SendSubscriptionResponse {
    sendSubscription: boolean;
}
const sendSubscriptionMutation = gql`
    mutation sendSubscription($sub: String!, $id: String!) {
        sendSubscription(sub: $sub, id: $id)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class SubscriptionService {
    // readonly VAPID_PUBLIC_KEY = 'BEx4ZmcloaWGhoAq588C55Bz8g2wSpKLiyosGf0EESX0t-T5NrF_83JfY54mLHpx089lUtg0NM6_1flosGSfpYg';
    readonly VAPID_PUBLIC_KEY = 'BLhpfcpYXCjI5ognNIQPcRwAJNNTiXqyzvj05A-L0DwXMrFT0lHpAkhtRdwOtNZVO9waQhE8JL73IxjB9o2EdOE';

    private _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public loading: Observable<boolean> = this._loading.asObservable();

    private _success: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public success: Observable<boolean> = this._success.asObservable();

    constructor(private swPush: SwPush, private log: LogService, private apollo: Apollo, private authService: AuthService) {
        this.subscribeToNotifications();
    }

    private subscribeToNotifications(): void {
        this.swPush
            .requestSubscription({
                serverPublicKey: this.VAPID_PUBLIC_KEY,
            })
            .then((sub) => this.sendPushSubscription(sub))
            .catch((err) => this.log.error('Could not subscribe to notifications', err));
    }
    private sendPushSubscription(sub: PushSubscription) {
        console.log(sub);
        // if no access is possible save it to localstorage temporary
        // check out if there is a way to queue all requests(mutations) for later usage - think offline mode
        const id = this.authService.currentUserValue.id;
        this.log.info(`Send Subscription for user: ${id}`);

        const subscriptionString = JSON.stringify(sub);
        this._loading.next(true);
        this.apollo
            .mutate<SendSubscriptionResponse>({
                mutation: sendSubscriptionMutation,
                variables: {
                    sub: subscriptionString,
                    id,
                },
            })
            .subscribe(
                (response) => {
                    this._loading.next(false);
                    const sent = response.data.sendSubscription;

                    if (sent) {
                        this.log.info('Sent subscription successfully');
                        this._success.next(true);
                    } else {
                        this.log.error('Error during sending or savin subscription.');
                    }
                },
                (error) => {
                    this.log.error('PushsubscriptionService -> sendPushSubscription', error);
                    this._loading.next(false);
                }
            );
    }
}
