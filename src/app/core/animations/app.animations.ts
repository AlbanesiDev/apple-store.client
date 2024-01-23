import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);

export const routeAnimation = trigger('routeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate(300, style({ opacity: 0 })),
  ]),
])

