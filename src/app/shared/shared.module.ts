import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';





@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    //primeNg Module
    TabMenuModule,
    MenubarModule,
    ToastModule //  allow others module to use toast i.e. app.Module
  ],

  exports: [
  HeaderComponent,
  FooterComponent,
  ReactiveFormsModule,
  RouterModule,

  //primeNg Module
  TabMenuModule,
  MenubarModule,
  ToastModule //  allow others module to use toast i.e. app.Module
  ]
})
export class SharedModule { }
