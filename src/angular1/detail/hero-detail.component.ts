import {Hero} from '../hero';
import {HeroService} from '../hero.service';

interface HeroDetailRouteParams extends ng.route.IRouteParamsService {
  id:string;
}

export class HeroDetailController {
  public hero: Hero;

  constructor(
    $scope: ng.IScope,
    private _HeroService_: HeroService,
    private _$routeParams_: HeroDetailRouteParams,
    private _$location_: ng.ILocationService
  ) {
    if (!this.hero) {
      let id = +this._$routeParams_.id;
      this._HeroService_.getHero(id).then((hero: Hero) => this.hero = hero);
    }
  }

  gotoHeroes() {
    this._$location_.path('heroes');
  }
}
