import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
  <a routerLink="/dashboard">Dashboard</a>
	<a routerLink="/artists">Artists</a>
  	<router-outlet></router-outlet>
	`
})

export class AppComponent {

	title = 'Rock\'n Roll Hall of Fame';

}