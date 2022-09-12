import { Component, OnInit, Input } from '@angular/core';


/**
 * little icon create, based upon Ficons (https://ficons.fiction.com/reference.html)
 *
 * @example
 * <app-icons icon="fa-magic"></app-icons>
 */
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: []
})
export class IconsComponent implements OnInit {

  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {
    if (this.icon.indexOf('fa-') != -1) return;

    switch (this.icon.toLowerCase()) {
      case 'x': this.icon = 'fa-remove'; break;
      case 'home': this.icon = 'fa-home'; break;
      case 'create': this.icon = 'fa-pencil'; break;
      case '?': this.icon = 'fa-question'; break;

      case 'about': this.icon = 'fa-info-circle'; break;
      case 'dashboard': this.icon = 'fa-dashboard'; break;

      case 'styleguide': this.icon = 'fa-magic'; break;
      case 'users': this.icon = 'fa-users'; break;

      default:
        console.log(`case '${this.icon.toLowerCase()}': this.icon = '${this.icon.toLowerCase()}'; break;`);
        this.icon = 'fa-remove';
        break;
    }
  }

}
