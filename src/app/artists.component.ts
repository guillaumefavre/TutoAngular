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
}
