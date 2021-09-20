import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact.component';
import { RouterModule, Routes } from '@angular/router';

import {SkeletonModule} from 'primeng/skeleton';

import { SharedModule } from '../shared/shared.module';

const routes: Routes =
[
{
  path: 'contact', component: ContactComponent, data: {animation:"contactPage"}
}]
@NgModule({
  declarations: [
    ContactComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SkeletonModule
  ],
  exports:[
  ContactComponent,
  SkeletonModule]
})
export class ContactModule { }
