import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit, ViewEncapsulation} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {BadgeComponent} from './badge.component';
import {Hero} from './hero';
import {Routes} from './route.config';

@Component({
  selector: 'my-heroes',
  templateUrl: 'angular2/components/heroes.component.html',
  styleUrls: ['angular2/components/heroes.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HeroDetailComponent, BadgeComponent], // adapter.upgradeNg1Component(Badge)
  encapsulation: ViewEncapsulation.Native // Pass styles to badge component
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) { }

  getHeroes() {
    this.selectedHero = undefined;
    this.heroes = [];

    this._heroService.getHeroes()
      .then((heroes: Hero[]) => this.heroes = heroes);

    return this.heroes;
  }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.selectedHero };
  }

  gotoDetail() {
    this._router.navigate([`/${Routes.detail.as}`, { id: this.selectedHero.id }]);
  }

  onInit() {
    this.heroes = this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
