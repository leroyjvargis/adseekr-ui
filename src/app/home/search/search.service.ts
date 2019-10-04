import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from '../../@core/data/ad';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  get(keyword: string) {
    return this.httpClient.get<Ad[]>('api/search?keyword=' + keyword);
  }
}
