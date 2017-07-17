import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Artist }           from './artist';
 
@Injectable()
export class ArtistSearchService {
 
  constructor(private http: Http) {}
 
  search(term: string): Observable<Artist[]> {
    return this.http
               .get(`api/artistsDB/?name=${term}`)
               .map(response => response.json().data as Artist[]);
  }
}