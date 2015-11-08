/// <reference path='./typings/tsd.d.ts' />
import 'angular';
import 'angular-route';
import {AppController} from './angular1/app/app.component';
import {DashboardController} from './angular1/dashboard/dashboard.component';
import {HeroesController} from './angular1/heroes/heroes.component';
import {HeroDetailController} from './angular1/detail/hero-detail.component';
import {BadgeDirective} from './angular1/badge/badge.component';
import {HeroService} from './angular1/hero.service';
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
  })
  .service('HeroService', HeroService)
  .directive('badge', BadgeDirective);


// Angular 2 upgrade bootstrap
//import {adapter} from './adapter';
//console.log(adapter);

//adapter.bootstrap(document.body, ['tourOfHeroes']);

// Make ng2 component available in ng1
//app.directive('heroes', adapter.downgradeNg2Component(HeroesComponent);

// Make ng1 HeroService injectable into ng2 HeroesComponent
//adapter.upgradeNg1Provider(HeroService, {asToken: HeroService});

// Make ng2 HeroService injectable into ng2 HeroesComponent
//adapter.addProvider(HeroService)

// Make ng2 HeroService injectable into ng2 HeroesComponent
//app.factory('HeroService', adapter.downgradeNg2Provider(HeroService));


