// cutout.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cutout } from './cutout';
import { CutoutService } from './cutout.service';

@Component({
  selector: 'app-cutout',
  templateUrl: './cutout.component.html',
  styleUrls: ['./cutout.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [FormsModule]
})
export class CutoutComponent {

  ////  ==== Méthode /process ====  ////

  public file!: File;
  public cutout!: Cutout;
  public processedCutout!: Blob;

  constructor(private cutoutService: CutoutService) { }
  //constructor(private frameService: FrameService) {}

  fileChange(event: any) {
    this.file = event.target.files[0];
  }

  processCutout() {
    this.cutoutService.process(this.file, this.cutout).subscribe(
      (data: Blob) => {
        // Le type 'blob' annonce qu'on attend en retour des octets binaires (l'image résultat), pas du JSON
        this.processedCutout = data;
      },
      error => {
        console.error('Error processing cutout', error);
      }
    );
  }

  getCutoutUrl() {
  }
}

/*
La transmission : CutoutService.process(file, cutout)

Il construit un FormData multipart avec deux parties :

formData.append('file', file, file.name);
formData.append('cutout', JSON.stringify(cutout));   // → {"upX":..,"upY":..,"width":..,"height":..}
return this.http.post(this.apiUrl, formData, { responseType: 'blob' });

Le fichier brut voyage (le back recevra l'image complète, jamais recadrée), et le cutout est l'instruction de découpage exprimée en JSON. Le responseType: 'blob' annonce qu'on attend en retour des octets binaires (l'image résultat), pas du JSON.
*/
