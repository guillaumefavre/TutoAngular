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
  { id: 5, name: 'Roger Waters', speciality: 'bass'  },
  { id: 6, name: 'Jimi Hendrix', speciality: 'guitar'  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <ul class="artists">
    <li *ngFor="let artist of artists">
    <span class="badge">{{artist.id}}</span> {{artist.name}} is a {{artist.speciality}} hero
  </ul>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .artists {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 25em;
  }
  .artists li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .artists li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .artists li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .artists .text {
    position: relative;
    top: -3px;
  }
  .artists .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
  title = 'Rock\'n Roll Hall of Fame';
  artists = ARTISTS;
}
