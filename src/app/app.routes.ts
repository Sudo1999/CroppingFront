//import { Routes } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
//import { FileuploaderComponent } from './file/fileuploader/fileuploader.component';
import { Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { CropComponent } from './file/crop/crop.component';
import { SendimageComponent } from './file/sendimage/sendimage.component';
import { FrameGetComponent } from './framecutout/frame/frame-get/frame-get.component';
import { FrameListComponent } from './framecutout/frame/frame-list/frame-list.component';
import { RectangleFormComponent } from './framecutout/rectangle/rectangle-form/rectangle-form.component';
import { RectangleListComponent } from './framecutout/rectangle/rectangle-list/rectangle-list.component';

export const routes: Routes = [
  {
    path: '',   // => http://localhost:4200/
    redirectTo: 'home',
    pathMatch: 'full'   // Important pour que toute l'adresse soit lue
  },
  // {
    // path: 'home',
    // component: AccueilComponent
  // },
  {
    path: 'rectangles',
    component: RectangleListComponent
  },
  {
    path: 'addrectangle',
    component: RectangleFormComponent
  },
  {
    path: 'api',
    component: FrameListComponent
  },
  {
    path: 'api/file/:fullname',
    component: FrameGetComponent
  },
  {
    path: 'cropping',
    component: CropComponent
  },
  {
    path: 'imageupload',
    component: SendimageComponent
  }
];