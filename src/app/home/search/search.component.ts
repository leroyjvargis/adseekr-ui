import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-search',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
