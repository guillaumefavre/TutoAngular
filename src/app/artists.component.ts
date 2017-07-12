import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artist } from './artist';
import { ArtistService } from './artist.service';



@Component({
  selector: 'my-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  artists: Artist[];
  selectedArtist: Artist;

  constructor(
    private artistService: ArtistService,
    private router: Router) { }

  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }

  getArtists(): void {
    this.artistService.getArtists().then(artists => this.artists = artists);
  }

  ngOnInit(): void {
    this.getArtists();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedArtist.id]);
  }

  add(name: string, speciality: string): void {
    name = name.trim();
    if (!name || !speciality) { 
      return; 
    }
    this.artistService.create(name, speciality)
      .then(artist => {
        this.artists.push(artist);
        this.selectedArtist = null;
      });
  }

  delete(artist: Artist): void {
    this.artistService
        .delete(artist.id)
        .then(() => {
          this.artists = this.artists.filter(h => h !== artist);
          if (this.selectedArtist === artist) { this.selectedArtist = null; }
        });
  }
}
