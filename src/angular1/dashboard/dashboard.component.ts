import {Hero} from '../hero';
import {HeroService} from '../../angular2/components/hero.service';

export class DashboardController {
  public heroes: Hero[];

  constructor($scope: ng.IScope, private _HeroService_: HeroService, private _$location_: ng.ILocationService) {
    this.heroes = this.getHeroes();
  }

  gotoDetail(hero: Hero) {
    this._$location_.path('detail/' + hero.id);
  }

  getHeroes() {
    this.heroes = [];

    this._HeroService_.getHeroes()
      .then((heroes: Hero[]) => this.heroes = heroes);

    return this.heroes;
  }
}
