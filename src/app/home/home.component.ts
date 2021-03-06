import { Component } from '@angular/core';
import { MENU_ITEMS } from './side-menu-items';

@Component({
  selector: 'ngx-home',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class HomeComponent {
  menu = MENU_ITEMS;

  constructor() { }

}
