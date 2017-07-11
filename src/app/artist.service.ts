import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Artist } from './artist';


@Injectable()
export class ArtistService {

	private artistsUrl = 'api/artistsDB';  // URL to web api (cf. in-memory-data.service.ts)

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getArtists(): Promise<Artist[]> {
	    return this.http.get(this.artistsUrl)
             .toPromise()
             .then(response => response.json().data as Artist[])
             .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred !', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	getArtist(id: number): Promise<Artist> {
	  const url = `${this.artistsUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as Artist)
	    .catch(this.handleError);
	}

	getArtistsSlowly(): Promise<Artist[]> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(this.getArtists()), 2000);
	  });
	}

	update(artist: Artist): Promise<Artist> {
	  const url = `${this.artistsUrl}/${artist.id}`;
	  return this.http
	    .put(url, JSON.stringify(artist), {headers: this.headers})
	    .toPromise()
	    .then(() => artist)
	    .catch(this.handleError);
	}
}