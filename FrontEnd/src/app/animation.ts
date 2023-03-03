import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  keyframes,
  animate,
} from '@angular/animations';

export let Animate = trigger('routeAnimations', [
  transition('*<=>*', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);
