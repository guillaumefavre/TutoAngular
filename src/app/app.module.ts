import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistDetailComponent } from './artist-detail.component'
import { ArtistsComponent } from './artists.component';
import { ArtistService } from './artist.service';
import { DashboardComponent } from './dashboard.component'


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
    RouterModule.forRoot([ // Router is composed by an array of route definitions (two parts : path and component)
      {
    	  path: '',
    	  redirectTo: '/dashboard',
    	  pathMatch: 'full'
    	},
      {
        path: 'artists',
        component: ArtistsComponent // Component that the router create when navigating to this route
      },
      {
    	  path: 'dashboard',
    	  component: DashboardComponent
  	  },
      {
        path: 'detail/:id', // les ':' indiquent que c'est un paramètre
        component: ArtistDetailComponent
      },
    ])
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
