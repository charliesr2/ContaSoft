import { Component } from '@angular/core';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'ContaSoft';
	hola = "Hola!!!";
	thing: string;
	
	  constructor(public authHttp: AuthHttp) {}
	
	  getThing() {
		// this uses authHttp, instead of http
		this.authHttp.get('http://localhost:62053')
		  .subscribe(
			data => {
				this.thing = data.toString();
				console.log(this.thing);
			},
			err => console.log(err),
			() => console.log('Request Complete')
		  );
	  }

}
