import { Component, Input } from '@angular/core';

import { Artist } from './artist';

@Component({
  selector: 'artist-detail',
  template: ` 
   <div *ngIf="artist">
    <h2>{{artist.name}} details</h2>
    <div><label>id: </label>{{artist.id}}</div>
    <div>
        <label>Name: </label>
        <input [(ngModel)]="artist.name" placeholder="name"/>
    </div>
    <div>
        <label>Speciality: </label>
        <input [(ngModel)]="artist.speciality" placeholder="speciality"/>
    </div>    
  </div>
  `
})
export class ArtistDetailComponent {
	@Input() artist: Artist;
}