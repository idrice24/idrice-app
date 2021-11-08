import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

const routes: Routes =[
{
  path: 'medias/photos', component: PhotosComponent, data: {animation:"photosPage"}
},
{
  path: 'medias/videos', component: VideosComponent, data: {animation:"videosPage"}
}

]

@NgModule({
  declarations: [
    PhotosComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [
  PhotosComponent
  ]
})
export class MediasModule { }
