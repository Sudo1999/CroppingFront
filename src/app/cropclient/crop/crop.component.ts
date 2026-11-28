import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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

  private http = inject(HttpClient);    // Injection du HttpClient (remplace ajax)
  public imageChangedEvent: any = '';
  public showCropper = false;
  public loading = false;
  public croppedImageUrl: SafeUrl | string = '';
  public croppedBlob: Blob | null | undefined = null;   // Stockage de l'image découpée
  public cropmode = signal<string>('');   // Initialisation du radio bouton sans valeur par défaut
  public showPreview = signal(false);   // Initialisation de l'aperçu en pop-up
  public imagetoloadName = "ImageRecadree";
  public imagetoloadFormat: 'png' | 'jpeg' | 'webp' = 'png';
  public frameRatio = 3/ 2;
  public frameWidth = 2560;

  fileChangeEvent(event: any): void {
    this.loading = true;
    this.imageChangedEvent = event;
  }
  imageLoaded(): void {
    this.showCropper = true;
    console.log('Image loaded');
  }
  loadImageFailed(): void {
    console.error('Load image failed');
  }
  cropperReady(sourceImageDimensions: Dimensions): void {
    this.loading = false;
    console.log('Cropper ready', sourceImageDimensions);
  }
  /* imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  } */
  imageCropped(event: ImageCroppedEvent): void {
    if (event.objectUrl) {
      this.croppedImageUrl = event.objectUrl;
      this.croppedBlob = event.blob;
    }
  }
  
  //  ====  Recadrer l'image et la télécharger  ====

  downloadimage(): void {
    if (!this.croppedImageUrl) return;

    const link = document.createElement('a');
    link.href = this.croppedImageUrl as string;
    link.download = this.imagetoloadName;
    // Les trois lignes qui suivent simulent l'ajout d'un lien de téléchargement invisible dans la page, un clic automatique de l'utilisateur dessus, puis sa suppression immédiate
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==== Recadrer l'image et l'enregistrer sur le serveur ====
  
  sendtoserver(): void {
    if (!this.croppedBlob) return;
    
    const formData = new FormData();
    formData.append('uploadfile', this.croppedBlob, this.imagetoloadName.concat("."+this.imagetoloadFormat));

    // Envoi du formData avec le service HttpClient en utilisant le proxy.conf.json :
    //this.http.post('/uploadfile', formData).subscribe({
    // => ng serve --proxy-config proxy.conf.json

    this.http.post('http://localhost:8080/uploadfile', formData).subscribe({
      next: (response) => {
        console.log('Upload réussi !', response);
        alert('Image enregistrée sur le serveur avec succès !');
      },
      error: (err) => {
        console.error('Erreur lors de l\'upload', err);
        alert('Erreur lors de l\'enregistrement.');
      }
    });
  }
}