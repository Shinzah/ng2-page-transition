import {trigger, state, animate, style, transition, AnimationEntryMetadata} from '@angular/core';

export function defaultPageTransition(): AnimationEntryMetadata {
  return fadeOutAndIn();
}

function fadeOutAndIn(): AnimationEntryMetadata {
  return trigger('ng2ElementState', [
    state('leave', style({
        opacity: 0.3,
    })),
    state('out', style({
        opacity: 0,
    })),
    state('enter', style({
        opacity: 1,
    })),
    transition('* => enter', 
      animate('0.5s ease-in')
    ),
    transition('* => leave', 
      animate('0.2s ease-out')
    ),
    transition('* => out', 
      animate('0ms')
    )
  ]);
}