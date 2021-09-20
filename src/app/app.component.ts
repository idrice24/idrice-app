import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
// import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	title = 'idrice';
	


constructor(
	private router: Router,
	private config: PrimeNGConfig
	){}

	ngOnInit(): void {
	}

	// Detect when a view changes
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
