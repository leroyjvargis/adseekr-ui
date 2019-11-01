import { Component, OnInit } from '@angular/core';
import { Ad } from '../../../@core/data/ad';
import { SearchService } from '../search.service';

@Component({
  selector: 'ngx-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss', '../search.component.scss'],
})
export class KeywordComponent implements OnInit {
  data: Ad[];
  keyword: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearchBtnClk() {
    this.searchService.keyword(this.keyword).subscribe(data => {
      this.data = data;
    });
  }
}
