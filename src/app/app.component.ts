import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<my-artists></my-artists>
	`
})

export class AppComponent {

	title = 'Rock\'n Roll Hall of Fame';

}