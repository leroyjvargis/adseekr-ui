import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ad } from '../../@core/data/ad';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  token: string;

  constructor(private httpClient: HttpClient) {
  }

  keyword(keyword: string) {
    const url = environment.baseUrl + 'search/keyword?keyword=' + keyword;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.get<Ad[]>(url, httpOptions);
  }

  domain(domain: string) {
    const url = environment.baseUrl + 'search/domain?domain=' + domain;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.get<Ad[]>(url, httpOptions);
  }
}
