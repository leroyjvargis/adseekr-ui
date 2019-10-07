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
    // this.data = [
    //   {
    //     title: 'Web Site Firewall',
    //     content: 'Complete Website Protection from Barracuda. Request Eval Unit Today!',
    //     company: 'barracuda.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    //   {
    //     title: 'Create Your Own Website',
    //     content: '10,000+ Templates for Your Website. Free Domain & Hosting. Start Now!',
    //     company: 'web.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    //   {
    //     title: '$0.99 Domains at Go Daddy - Why Pay More? Compare Us!',
    //     content: 'Free Hosting w/Site Builder & More.',
    //     company: 'GoDaddy.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    //   {
    //     title: '$0.99 Domains at Go Daddy - Why Pay More? Compare Us!',
    //     content: 'Free Hosting w/Site Builder & More.',
    //     company: 'GoDaddy.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    //   {
    //     title: 'Web Site Firewall',
    //     content: 'Complete Website Protection from Barracuda. Request Eval Unit Today!',
    //     company: 'barracuda.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    //   {
    //     title: 'Create Your Own Website',
    //     content: '10,000+ Templates for Your Website. Free Domain & Hosting. Start Now!',
    //     company: 'web.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    //   {
    //     title: 'Create Your Own Website',
    //     content: '10,000+ Templates for Your Website. Free Domain & Hosting. Start Now!',
    //     company: 'web.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    //   {
    //     title: 'Web Site Firewall',
    //     content: 'Complete Website Protection from Barracuda. Request Eval Unit Today!',
    //     company: 'barracuda.com',
    //     first_seen: '2014-04-14',
    //     last_seen: '2014-04-14',
    //   },
    // ];
  }

  onSearchBtnClk() {
    this.searchService.get(this.keyword).subscribe(data => {
      this.data = data;
    });
  }

}
