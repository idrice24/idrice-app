import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';

import { RouterModule, Routes } from '@angular/router';



const routes: Routes =
[
{
  path: 'about-us', component: ComponentsComponent, data: { animation:"aboutPage" }
}]
@NgModule({
  
  declarations: [
    ComponentsComponent,
    AboutComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    ComponentsComponent,
    RouterModule
  ]
})
export class AboutUsModule { }
