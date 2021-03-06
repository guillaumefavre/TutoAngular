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

	getArtist(id: number): Promise<Artist> {
	  const url = `${this.artistsUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as Artist)
	    .catch(this.handleError);
	}

	// Fonction simulant une récupération des données avec un délai de latence
	getArtistsSlowly(): Promise<Artist[]> {
	  return new Promise(resolve => {
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

	create(nameParam: string, specialityParap: string): Promise<Artist> {
	  return this.http
	    .post(this.artistsUrl, JSON.stringify({name: nameParam, speciality: specialityParap}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Artist)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.artistsUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

	// Fonction de gestion des erreurs
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred !', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}