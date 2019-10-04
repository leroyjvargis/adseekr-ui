import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Ad } from '../../@core/data/ad';
import { NbAuthService } from '@nebular/auth';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  token: string;

  constructor(private httpClient: HttpClient, private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe(token => {
      this.token = token.getValue();
    });
  }

  get(keyword: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.token,
      }),
    };

    return this.httpClient.get<Ad[]>(environment.baseUrl + 'search?keyword=' + keyword, httpOptions);
  }
}
