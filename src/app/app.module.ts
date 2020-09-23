import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComponentsComponent } from './components/components.component';
import { SharedComponent } from './shared/shared.component';
import { ExamplesComponent } from './examples/examples.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingComponent } from './examples/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ComponentsComponent,
    SharedComponent,
    ExamplesComponent,
    NavbarComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
