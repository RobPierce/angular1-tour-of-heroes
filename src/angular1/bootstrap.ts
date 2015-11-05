import 'angular';
import 'angular-route';
import {AppController} from './app/app.component';
import {DashboardController} from './dashboard/dashboard.component';
import {HeroesController} from './heroes/heroes.component';
import {HeroDetailController} from './detail/hero-detail.component';
import {BadgeDirective} from './badge/badge.component';
import {HeroService} from './hero.service';
import {RouterConfig} from './router.config';

var app = angular.module('tourOfHeroes', ['ngRoute']);

// Angular 1 bootstrap
app
  .config(RouterConfig)
  .controller({
    AppController: AppController,
    DashboardController: DashboardController,
    HeroesController: HeroesController,
    HeroDetailController: HeroDetailController
  })
  .service('HeroService', HeroService)
  .directive('badge', BadgeDirective);


// Angular 2 upgrade bootstrap
/*
 * import {UpgradeAdapter} from 'angular2/upgrade';
 * var adapter = new UpgradeAdapter();
 *
 * adapter.bootstrap(document.body, ['tourOfHeroes']);
 *
 * // Make ng2 component available in ng1
 * app.directive('heroes', adapter.downgradeNg2Component(HeroesComponent);
 *
 * // Make ng1 HeroService injectable into ng2 HeroesComponent
 * adapter.upgradeNg1Provider(HeroService, { asToken: HeroService });
 *
 * // Make ng2 HeroService injectable into ng2 HeroesComponent
 * adapter.addProvider(HeroService)
 *
 * // Make ng2 HeroService injectable into ng2 HeroesComponent
 * app.factory('HeroService', adapter.downgradeNg2Provider(HeroService));
 */


