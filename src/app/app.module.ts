import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ArtistDetailComponent } from './artist-detail.component'
import { ArtistsComponent } from './artists.component';
import { ArtistService } from './artist.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
