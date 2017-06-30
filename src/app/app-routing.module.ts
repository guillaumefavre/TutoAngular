import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ArtistDetailComponent } from './artist-detail.component'
import { ArtistsComponent } from './artists.component';
import { DashboardComponent } from './dashboard.component'
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ArtistDetailComponent },
  { path: 'artists',     component: ArtistsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}