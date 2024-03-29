import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RectangleListComponent } from './framecutout/rectangle/rectangle-list/rectangle-list.component';
import { RectangleFormComponent } from './framecutout/rectangle/rectangle-form/rectangle-form.component';
import { RectangleService } from './services/rectangle.service';
import { FrameListComponent } from './framecutout/frame/frame-list/frame-list.component';
import { FrameGetComponent } from './framecutout/frame/frame-get/frame-get.component';
import { FrameService } from './services/frame.service';
import { CutoutComponent } from './framecutout/cutout/cutout.component';
import { FileuploaderComponent } from './file/fileuploader/fileuploader.component';
import { CropComponent } from './file/crop/crop.component';
import { ImageuploadComponent } from './file/imageupload/imageupload.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RectangleListComponent,
    RectangleFormComponent,
    FrameListComponent,
    FrameGetComponent,
    CutoutComponent,
    FileuploaderComponent,
    CropComponent,
    ImageuploadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    //MatToolbarModule,
    //MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageCropperModule,
    ToastrModule.forRoot(),
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
