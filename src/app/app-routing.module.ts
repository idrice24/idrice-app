import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';

import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home',			component: HomeComponent, data:{ animation: 'HomePage'} },
	{ 
		path: 'products',
		loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
	 },
	{ 
		path: 'contact',
		loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) 
	 },
	{ 
		path: 'about-us',
		loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
	 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],

  exports: [ RouterModule]
})
export class AppRoutingModule { }
