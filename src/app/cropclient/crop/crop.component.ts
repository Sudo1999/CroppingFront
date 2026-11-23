import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dimensions, ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrl: './crop.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    FormsModule,
    ImageCropperComponent
  ]
})
export class CropComponent {

  public imageChangedEvent: any = '';
  public croppedImage: any = '';
  public showCropper = false;
  public loading = false;
  // Initialisation avec une valeur par défaut (ou '' si rien n'est coché au départ)
  public cropmode = signal<string>('');

  //  ====  Crop Image Before Upload.docx (Recadrer l'image et la télécharger)  ====

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
