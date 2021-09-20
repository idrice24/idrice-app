import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { SharedModule } from '../shared/shared.module';
import { ContactModule } from '../contact/contact.module';
import { RouterModule } from '@angular/router';

import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactModule,
    ProductModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class CoreModule { }
