import { Component } from '@angular/core';

export class Artist {
  id: number;
  name: string;
  speciality: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>{{artist.name}} is a {{artist.speciality}} hero !</h2>
  <div><label>id: </label>{{artist.id}}</div>
  <div>
  	<label>Name: </label>
  	<input [(ngModel)]="artist.name" placeholder="name">
  </div>
  <div>
  	<label>Speciality: </label>
  	<input [(ngModel)]="artist.speciality" placeholder="speciality">
  </div>
  `
})
export class AppComponent {
  title = 'Rock\'n Roll Hall of Fame';
  artist: Artist = {
  	id: 1,
  	name: 'Angus Young',
  	speciality: 'guitar'
  };
}
