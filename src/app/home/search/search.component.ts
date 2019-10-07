import { Component, OnInit } from '@angular/core';
import { Ad } from '../../@core/data/ad';
import { SearchService } from './search.service';
@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  data: Ad[];
  keyword: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearchBtnClk() {
    this.searchService.get(this.keyword).subscribe(data => {
      this.data = data;
    });
  }

}
