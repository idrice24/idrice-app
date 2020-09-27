import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';

const routes: Routes = [
	{ path: '', redirectTo: 'index', pathMatch: 'full'},
	{ path: 'index',			component: ComponentsComponent },
	{ path: 'examples/landing', component: LandingComponent }
];

@NgModule({
  imports: [
  		CommonModule,
  		BrowserModule,
  		RouterModule.forRoot(routes)],

  exports: [],
})
export class AppRoutingModule { }
