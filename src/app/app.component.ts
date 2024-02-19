import { Component } from '@angular/core';
import { ImageCroppedEvent, Dimensions } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string;
  public imageChangedEvent: any = '';
  public croppedImage: any = '';
  public showCropper = false;
  public loading = false;

  constructor() {
    this.title = 'Spring Boot - Angular Cropping Application';
  }

  fileChangeEvent(event: any): void {
    this.loading = true;
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady(sourceImageDimensions: Dimensions) {
    this.loading = false;
    console.log('Cropper ready', sourceImageDimensions);
  }
  loadImageFailed() {
    console.error('Load image failed');
  }
}
