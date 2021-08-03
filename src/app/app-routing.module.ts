import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';

import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home',			component: HomeComponent, data:{ animation: 'HomePage'} },
	{ path: 'examples/landing', component: LandingComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],

  exports: [ RouterModule]
})
export class AppRoutingModule { }
