import { Observable } from 'rxjs';

export interface Ad {
  title: string;
  body: string;
  advertiser: string;
  first_seen: string;
  last_seen: string;
  times_seen: number;
  url: string;
}

export abstract class AdData {
  abstract getAdData(): Observable<Ad[]>;
}
