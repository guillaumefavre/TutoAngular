import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { ArtistSearchService } from './artist-search.service';
import { Artist } from './artist';
 
@Component({
  selector: 'artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: [ './artist-search.component.css' ],
  providers: [ArtistSearchService]
})
export class ArtistSearchComponent implements OnInit {
  artists: Observable<Artist[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private artistSearchService: ArtistSearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.artists = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.artistSearchService.search(term)
        // or the observable of empty artists if there was no search term
        : Observable.of<Artist[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Artist[]>([]);
      });
  }
 
  gotoDetail(artist: Artist): void {
    let link = ['/detail', artist.id];
    this.router.navigate(link);
  }
}