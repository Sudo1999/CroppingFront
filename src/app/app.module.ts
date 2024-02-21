import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UploadComponent } from './FrameCutout/file/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent,
    FrameComponent,
    RectangleListComponent,
    RectangleFormComponent,
    FrameListComponent,
    FrameGetComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //MatToolbarModule,
    //MatButtonModule,
    HttpClientModule,
    ImageCropperModule,
    FileUploadModule,
    AppRoutingModule
  ],
  // Le provider est une méthode qui fournit une instance de classe aux composantes de l'application
  providers: [
    RectangleService,
    FrameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
