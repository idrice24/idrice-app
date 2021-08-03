import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// primNg module imports
import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { MessageService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';

import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';

import { RatingModule } from 'primeng/rating';
//import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { Title } from '@angular/platform-browser';
//import { ScrollTopModule } from 'primeng/scrolltop';

import { GMapModule } from 'primeng/gmap';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

import { GalleriaModule } from 'primeng/galleria';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';



// AoT requires an exported function for factories
//export function HttpLoaderFactory(httpClient: HttpClient) {
 // return new TranslateHttpLoader(httpClient);
//}



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
    ToastModule, //  allow others module to use toast i.e. app.Module
    ButtonModule,
    InputTextModule,
    TooltipModule,
    MessageService,
    DataViewModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    SidebarModule,
    FileUploadModule,
    ConfirmDialogModule,
    DividerModule,
    PanelModule,
    RatingModule,
   // DropdownModule,
    TabViewModule,
    FieldsetModule,
    MenuModule,
    ListboxModule,
    CarouselModule,
    CardModule,
    RippleModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    Title,
    GMapModule,
    PasswordModule,
    CheckboxModule,
    GalleriaModule,
  ],

  exports: [
  HeaderComponent,
  FooterComponent,
  ReactiveFormsModule,
  RouterModule,

  //primeNg Module
  TabMenuModule,
  MenubarModule,
  ToastModule, //  allow others module to use toast i.e. app.Module
  ButtonModule,
  InputTextModule,
  TooltipModule,
  MessageService,
  DataViewModule,
  TableModule,
  ToolbarModule,
  DialogModule,
  InputTextModule,
  InputNumberModule,
  InputTextareaModule,
  SidebarModule,
  FileUploadModule,
  ConfirmDialogModule,
  DividerModule,
  PanelModule,
  RatingModule,
  //DropdownModule,
  TabViewModule,
  FieldsetModule,
  MenuModule,
  ListboxModule,
  CarouselModule,
  CardModule,
  RippleModule,
  RadioButtonModule,
  ProgressSpinnerModule,
  ProgressBarModule,
  Title,
  GMapModule,
  PasswordModule,
  CheckboxModule,
  GalleriaModule
  ]
})
export class SharedModule { }
