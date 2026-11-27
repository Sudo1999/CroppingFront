import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
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
  public showCropper = false;
  public loading = false;
  public croppedImage: SafeUrl | string = '';
  public croppedBlob: Blob | null | undefined = null;
  public cropmode = signal<string>('');   // Initialisation du radio bouton sans valeur par défaut
  public showPreview = signal(false);   // Initialisation de l'aperçu en pop-up
  public frameRatio = 3/ 2;
  public frameWidth = 2560;

  //  ====  Crop Image Before Upload.docx (Recadrer l'image et la télécharger)  ====

  fileChangeEvent(event: any): void {
    this.loading = true;
    this.imageChangedEvent = event;
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady(sourceImageDimensions: Dimensions) {
    this.loading = false;
    console.log('Cropper ready', sourceImageDimensions);
  }
  /* imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  } */
  imageCropped(event: ImageCroppedEvent) {
    if (event.objectUrl) {
      this.croppedImage = event.objectUrl;
      this.croppedBlob = event.blob;
    }
  }
  downloadImage(): void {
    if (!this.croppedImage) return;
    const link = document.createElement('a');
    link.href = this.croppedImage as string;
    link.download = 'ImageRecadree.png';   // Nom du fichier téléchargé
    // Ces trois lignes qui suivent simulent l'ajout d'un lien de téléchargement invisible dans la page, un clic automatique de l'utilisateur dessus, puis sa suppression immédiate
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  loadImageFailed() {
    console.error('Load image failed');
  }
}
