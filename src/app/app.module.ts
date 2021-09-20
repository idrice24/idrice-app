import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
// import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(
//private messageService: MessageService,
private router: Router,
  ){
// Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(this.router.config, replacer, 2));}
}
