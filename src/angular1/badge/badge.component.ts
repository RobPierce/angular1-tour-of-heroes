import {Hero} from '../hero';

class BadgeController {
  public hero : Hero;
}

export function BadgeDirective() : ng.IDirective {
  return {
    controller: BadgeController,
    controllerAs: 'ctrl',
    bindToController: { hero: '=' },
    template: '<span><span class="badge">{{ctrl.hero.id}}</span> {{ctrl.hero.name}}</span>',
    scope: {}
  };
}
