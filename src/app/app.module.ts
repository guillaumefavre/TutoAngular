import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ArtistDetailComponent } from './artist-detail.component'
import { ArtistsComponent } from './artists.component';
import { ArtistService } from './artist.service';
import { DashboardComponent } from './dashboard.component'

import { AppRoutingModule }     from './app-routing.module';


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
    AppRoutingModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
