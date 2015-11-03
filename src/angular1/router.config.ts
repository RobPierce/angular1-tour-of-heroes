export class RouterConfig {
  constructor($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'angular1/dashboard/dashboard.component.html',
        controllerAs: 'vm',
        controller: 'DashboardController'
      })
      .when('/heroes', {
        templateUrl: 'angular1/heroes/heroes.component.html',
        controllerAs: 'vm',
        controller: 'HeroesController'
      })
      .when('/detail/:id', {
        templateUrl: 'angular1/detail/hero-detail.component.html',
        controllerAs: 'vm',
        controller: 'HeroDetailController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}
