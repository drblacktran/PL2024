import {trigger, transition, style, animate} from '@angular/animations';


export const fadeInLeftAnimation = trigger('fadeInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50px)' }), // Start off-screen to the left
    animate('{{ delay || "0ms" }} ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
