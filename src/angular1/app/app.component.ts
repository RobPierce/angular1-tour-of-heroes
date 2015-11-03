export class AppController {
  private title: string;

  constructor ($scope: ng.IScope, private _$location_: ng.ILocationService) {
    this.title = 'Tour of Heroes';
  }

  isActive(route: string) {
    return { 'router-link-active': this._$location_.path() === route };
  }
}
