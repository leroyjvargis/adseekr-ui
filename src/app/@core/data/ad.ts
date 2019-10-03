import { Observable } from 'rxjs';

export interface Ad {
  title: string;
  content: string;
  company: string;
  first_seen: string;
  last_seen: string;
}

export abstract class AdData {
  abstract getAdData(): Observable<Ad[]>;
}
