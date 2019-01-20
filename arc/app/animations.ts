import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("P1 <=> P2", [
    style({ position: "relative" }),

    query(":leave", [
      // cubic-bezier(0.35, 0, 0.25, 1)
      animate(
        "1000ms cubic-bezier( 0.1, 0.7, 1.0, 0.1)",
        style({ opacity: 0, transform: "scale(4)" })
      )
    ])

    // query(':enter, :leave', [
    //   style({
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     width: '100%'
    //   })
    // ]),

    // query(':enter', [
    //   style({ left: '-100%'})
    // ]),

    // query('.btnx', [
    //     // cubic-bezier(0.35, 0, 0.25, 1)
    //     animate('1000ms cubic-bezier( 0.1, 0.7, 1.0, 0.1)', style({ opacity: 0, transform: 'scale(4)' })),
    //   ]),

    //   query('.imgx', [
    //     // cubic-bezier(0.35, 0, 0.25, 1)
    //     animate('1000ms cubic-bezier( 0.1, 0.7, 1.0, 0.1)', style({ opacity: 0, transform: 'scale(.2)' })),
    //   ]),

    // query(':leave', animateChild()),
    // group([
    //   query(':leave', [
    //     animate('5000ms ease-out', style({ left: '100%'}))
    //   ]),
    //   query(':enter', [
    //     animate('5000ms ease-out', style({ left: '0%'}))
    //   ])
    // ]),
    // query(':enter', animateChild()),
  ])
]);
