import { animation, trigger, transition, animate, style } from '@angular/animations';

export const stdFadeAnimation = animation([
    style({
        opacity: '{{ opacity }}',
    }),
    animate('{{ time }}'),
]);

export class Animations {
    public static fade = trigger('fade', [
        transition(':enter', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]),
        transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]);
}
