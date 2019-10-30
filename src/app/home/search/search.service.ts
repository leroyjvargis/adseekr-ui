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

  get(keyword: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };

    return this.httpClient.get<Ad[]>(environment.baseUrl + 'search?keyword=' + keyword, httpOptions);
  }
}
