import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Artist } from './artist';
import { ArtistService } from './artist.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'artist-detail',
  templateUrl: './artist-detail-component.html',
  styleUrls: [ './artist-detail.component.css' ]
})
export class ArtistDetailComponent implements OnInit {
	artist: Artist;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.artistService.getArtist(+params.get('id'))) // Extraction du paramètre "id". Le '+' permet de convertir l'id de string en number
      .subscribe(artist => this.artist = artist);
  }

  // Méthode permettant de retourner en arrière dans l'historique du navigateur (rendu possible grâce au service Location)
  goBack(): void {
    this.location.back();
  }
}