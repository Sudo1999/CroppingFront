import { Component } from '@angular/core';
import { Dimensions, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrl: './crop.component.css'
})
export class CropComponent {

  public imageChangedEvent: any = '';
  public croppedImage: any = '';
  public showCropper = false;
  public loading = false;
  
  //  ====  Crop Image Before Upload.docx  ====

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
