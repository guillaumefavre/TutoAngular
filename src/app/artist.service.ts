import { Injectable } from '@angular/core';

import { Artist } from './artist';
import { ARTISTS } from './mock-artists';

@Injectable()
export class ArtistService {
	getArtists(): Promise<Artist[]> {
	  return Promise.resolve(ARTISTS);
	}

	getArtistsSlowly(): Promise<Artist[]> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(this.getArtists()), 2000);
	  });
	}
}