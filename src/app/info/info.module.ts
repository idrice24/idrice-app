import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';

const routes: Routes =
[
{
  path: 'newsletter', component: NewsletterComponent, data: {animation:"newsletterPage"}
}]
@NgModule({
  declarations: [
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BrowserModule,
    SharedModule
  ],
  exports: [
  NewsletterComponent
  ]
})
export class InfoModule { }
