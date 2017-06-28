import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

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
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([ // Router is composed by an array of route definitions (two parts : path and component)
    {
      path: 'artists',
      component: ArtistsComponent // Component that the router create when navigating to this route
    }
  ])
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
