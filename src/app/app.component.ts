import { Component, OnInit } from '@angular/core';

import { Artist } from './artist';
import { ArtistService } from './artist.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>

  <ul class="artists">
    <li *ngFor="let artist of artists" 
      [class.selected]="artist === selectedArtist"
      (click)="onSelect(artist)">
      <span class="badge">{{artist.id}}</span> {{artist.name}} is a {{artist.speciality}} hero
  </ul>
  <!-- Affichage du composant ArtistDetail. [artist] correspond à l'imput utilisé dans ce composant. -->
  <artist-detail [artist]="selectedArtist"></artist-detail>
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
`],
  providers: [ArtistService]
})
export class AppComponent implements OnInit {
  title = 'Rock\'n Roll Hall of Fame';
  artists: Artist[];
  selectedArtist: Artist;

  constructor(private artistService: ArtistService) { }

  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }

  getArtists(): void {
    this.artistService.getArtists().then(artists => this.artists = artists);
  }

  ngOnInit(): void {
    this.getArtists();
  }
}
