import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './FrameCutout/frame/frame.component';
import { AppComponent } from './app.component';
import { RectangleListComponent } from './FrameCutout/rectangle/rectangle-list/rectangle-list.component';
import { RectangleFormComponent } from './FrameCutout/rectangle/rectangle-form/rectangle-form.component';
import { FrameGetComponent } from './FrameCutout/frame/frame-get/frame-get.component';
import { FrameListComponent } from './FrameCutout/frame/frame-list/frame-list.component';

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
    //   component: FrameComponent },
    {
      path: 'rectangles',
      component: RectangleListComponent },
    {
      path: 'addrectangle',
      component: RectangleFormComponent },
    {
      path: 'api',
      component: FrameListComponent },
    {
      path: 'api/file/:fullname',
      component: FrameGetComponent }
  ]
}
