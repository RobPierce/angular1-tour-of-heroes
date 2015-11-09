import {Hero} from './hero';
import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'badge',
  template: '<span class="badge">{{hero.id}}</span> {{hero.name}}'
})
export class BadgeComponent {
  @Input()
  hero: Hero;
}
