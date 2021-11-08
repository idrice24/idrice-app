import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AuthGuard } from '../auth/guards/auth.guard';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from '../core/components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from '../core/components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageVideosComponent } from './components/manage-videos/manage-videos.component';
import { ManagePhotosComponent } from './components/manage-photos/manage-photos.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { ManageNewsletterComponent } from './components/manage-newsletter/manage-newsletter.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';



// REF: https://angular.io/guide/router  live example
const adminRoutes: Routes =[
{
path:'',
component: AdminComponent,
canActivate:[AuthGuard],
children: [
    { path: '', canActivateChild: [AuthGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'products',component: ManageProductComponent},
      { path: 'videos',component: ManageVideosComponent},
      { path: 'photos',component: ManagePhotosComponent},
      { path: 'users',component: ManageUsersComponent},
      { path: 'newsletter',component: ManageNewsletterComponent},
      { path: 'contact',component: ManageContactComponent},
      { path: '/ibc/login',component: LoginComponent},
      { path: '/ibc/register', component: RegisterComponent}

    ]}
]
}]
@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageVideosComponent,
    ManagePhotosComponent,
    ManageProductComponent,
    ManageContactComponent,
    ManageNewsletterComponent,
    ManageUsersComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    CoreModule,

    RouterModule.forChild(adminRoutes)
  ],
  exports: [ RouterModule],

  providers: [MessageService, ConfirmationService]
})
export class AdminModule { }
