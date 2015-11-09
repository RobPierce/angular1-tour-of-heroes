/// <reference path='./typings/tsd.d.ts' />
import 'angular';
import 'angular-route';
import {AppController} from './angular1/app/app.component';
import {DashboardController} from './angular1/dashboard/dashboard.component';
import {HeroesController} from './angular1/heroes/heroes.component';
import {HeroDetailController} from './angular1/detail/hero-detail.component';
import {BadgeDirective} from './angular1/badge/badge.component';
import {RouterConfig} from './angular1/router.config';

var app = angular.module('tourOfHeroes', ['ngRoute']);

// Angular 1 bootstrap
app
  .config(RouterConfig)
  .controller({
    AppController: AppController,
    DashboardController: DashboardController,
    HeroesController: HeroesController,
    HeroDetailController: HeroDetailController
  });

// Angular 2 upgrade bootstrap
import {adapter} from './adapter';
import {BadgeComponent} from './angular2/components/badge.component';
import {HeroService} from './angular2/components/hero.service';

// Make ng2 component available in ng1
app
  .directive('badge', adapter.downgradeNg2Component(BadgeComponent))
  .service('HeroService', HeroService);

adapter.bootstrap(document.body, ['tourOfHeroes']);
adapter.addProvider(HeroService);

// Make ng1 HeroService injectable into ng2 HeroesComponent
//adapter.upgradeNg1Provider(HeroService, {asToken: HeroService});

// Make ng2 HeroService injectable into ng2 HeroesComponent
//adapter.addProvider(HeroService)

// Make ng2 HeroService injectable into ng2 HeroesComponent
//app.factory('HeroService', adapter.downgradeNg2Provider(HeroService));


