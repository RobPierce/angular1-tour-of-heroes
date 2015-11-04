import 'angular';
import 'angular-route';
import {AppController} from './app/app.component';
import {DashboardController} from './dashboard/dashboard.component';
import {HeroesController} from './heroes/heroes.component';
import {HeroDetailController} from './detail/hero-detail.component';
import {HeroService} from './hero.service';
import {RouterConfig} from './router.config';

angular.module('tourOfHeroes', ['ngRoute'])
  .config(RouterConfig)
  .controller({
    AppController: AppController,
    DashboardController: DashboardController,
    HeroesController: HeroesController,
    HeroDetailController: HeroDetailController
  })
  .service('HeroService', HeroService);
