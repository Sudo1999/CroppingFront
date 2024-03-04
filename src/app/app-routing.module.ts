import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RectangleListComponent } from './framecutout/rectangle/rectangle-list/rectangle-list.component';
import { RectangleFormComponent } from './framecutout/rectangle/rectangle-form/rectangle-form.component';
import { FrameListComponent } from './framecutout/frame/frame-list/frame-list.component';
import { FrameGetComponent } from './framecutout/frame/frame-get/frame-get.component';
import { FileuploaderComponent } from './file/fileuploader/fileuploader.component';
import { CropComponent } from './file/crop/crop.component';
import { ImageuploadComponent } from './file/imageupload/imageupload.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  public static routes: Routes = [
    {
      path: '',   // => http://localhost:4200/
      redirectTo: 'home',
      pathMatch: 'full' },   // Important pour que toute l'adresse soit lue
    // {
    //   path: 'home',
    //   component: AccueilComponent },
    {
      path: 'rectangles',
      component: RectangleListComponent },
    {
      path: 'addrectangle',
      component: RectangleFormComponent },
    {
      path: 'cropping',
      component: CropComponent },
    {
      path: 'api',
      component: FrameListComponent },
    {
      path: 'api/file/:fullname',
      component: FrameGetComponent },
    {
      path: 'imageupload',
      component: ImageuploadComponent }
  ]
}
