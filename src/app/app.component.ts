import { Component } from '@angular/core';

export class Artist {
  id: number;
  name: string;
  speciality: string;
}

const ARTISTS: Artist[] = [
  { id: 1, name: 'Keyth Richards', speciality: 'guitar' },
  { id: 2, name: 'Angus Young', speciality: 'guitar'  },
  { id: 3, name: 'Slash', speciality: 'guitar'  },
  { id: 4, name: 'Mick Jagger', speciality: 'singing'  },
  { id: 5, name: 'Roger Waters', speciality: 'bass'  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>My Artists</h2>
  <ul class="artists">
    <li *ngFor="let artist of artists">
    <span class="badge">{{artist.id}}</span> {{artist.name}} is a {{artist.speciality}} hero
  </ul>
  `
})
export class AppComponent {
  title = 'Rock\'n Roll Hall of Fame';
  artists = ARTISTS;
}
