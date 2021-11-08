import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SkeletonModule } from 'primeng/skeleton';

import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactMapComponent } from './components/contact-map/contact-map.component';


const routes: Routes =
[
{
  path: 'contact', component: ContactComponent, data: {animation:"contactPage"}
}]
@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    RouterModule.forChild(routes),
    SkeletonModule
  ],
  exports:[
  ContactFormComponent,
  SkeletonModule]
})
export class ContactModule { }
