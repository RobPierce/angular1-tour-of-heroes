import {HeroService} from '../hero.service';
import {Hero} from '../hero';

export class HeroesController {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor($scope: ng.IScope, private _HeroService_: HeroService, private _$location_: ng.ILocationService) {
    this.heroes = this.getHeroes();
  }

  getHeroes() {
    this.selectedHero = undefined;
    this.heroes = [];

    this._HeroService_.getHeroes()
      .then((heroes: Hero[]) => this.heroes = heroes);

    return this.heroes;
  }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.selectedHero };
  }

  gotoDetail() {
    this._$location_.path('detail/' + this.selectedHero.id);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

