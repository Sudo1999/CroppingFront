//import { Routes } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { CropComponent } from './cropclient/crop/crop.component';
import { SendimageComponent } from './cropclient/sendimage/sendimage.component';
import { CutoutComponent } from './cropserver/cutout/cutout.component';
import { FrameGetComponent } from './cropserver/frame/frame-get/frame-get.component';
import { FrameListComponent } from './cropserver/frame/frame-list/frame-list.component';
import { RectangleFormComponent } from './cropserver/rectangle/rectangle-form/rectangle-form.component';
import { RectangleListComponent } from './cropserver/rectangle/rectangle-list/rectangle-list.component';

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
    path: 'cutout',
    component: CutoutComponent
  },
  {
    path: 'rectangles',
    component: RectangleListComponent
  },
  {
    path: 'addrectangle',
    component: RectangleFormComponent
  },
  {
    path: 'imageupload',
    component: SendimageComponent
  }
];