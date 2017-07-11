import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http'; // bibliothèque de services HTTP

import { AppComponent } from './app.component';
import { ArtistDetailComponent } from './artist-detail.component'
import { ArtistsComponent } from './artists.component';
import { ArtistService } from './artist.service';
import { DashboardComponent } from './dashboard.component'

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailComponent,
    ArtistsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
