import { Component, OnInit } from '@angular/core';
import { Ad } from '../../../@core/data/ad';
import { SearchService } from '../search.service';

@Component({
  selector: 'ngx-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss', '../search.component.scss'],
})
export class DomainComponent implements OnInit {
  data: Ad[];
  domain: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearchBtnClk() {
    this.searchService.domain(this.domain).subscribe(data => {
      this.data = data;
    });
  }
}
