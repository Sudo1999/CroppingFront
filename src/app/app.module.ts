import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExoComponent } from './Exo/exo.component';
import { FrameComponent } from './FrameCutout/frame/frame.component';
import { RectangleListComponent } from './FrameCutout/rectangle/rectangle-list/rectangle-list.component';
import { RectangleFormComponent } from './FrameCutout/rectangle/rectangle-form/rectangle-form.component';
import { RectangleService } from './Service/rectangle.service';
import { FrameListComponent } from './FrameCutout/frame/frame-list/frame-list.component';
import { FrameGetComponent } from './FrameCutout/frame/frame-get/frame-get.component';
import { FrameService } from './Service/frame.service';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent,
    FrameComponent,
    RectangleListComponent,
    RectangleFormComponent,
    FrameListComponent,
    FrameGetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ImageCropperModule,
    FileUploadModule,
    AppRoutingModule
  ],
  // Le provider est une méthode pour fournir une instance d'une classe aux composantes de l'application
  providers: [
    RectangleService,
    FrameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
