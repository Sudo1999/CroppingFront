import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { FrameService } from '../../getimage/frame/frame.service';

@Component({
  /* Télécharger une image en Angular.docx => J'envoie le html dans le component.html */
  /* template: `
  <div class="container">
    <input type="file" accept=".jpg,.png" class="button" (change)="uploadImage($any($event.target).files)" />
    <p> Upload Percent : {{ percentDone }}% </p>
    <br />
    <ng-container *ngIf="uploadSuccess" class="success">
      <p class="success">Upload Successful</p>
    </ng-container>
  </div>
  `, */
  selector: 'app-sendimage',
  templateUrl: './sendimage.component.html',
  styleUrl: './sendimage.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FileUploadModule
  ]
})
export class SendimageComponent implements OnInit {

  private http = inject(HttpClient);
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:8080/api/upload' });

  //public hasBaseDropZoneOver = false;
  //public imageForm!: FormGroup;
  //public uploadUrl = 'http://localhost:8080/api/upload'; // <-- Mon URL d'upload (A vérifier)

  constructor(
    //private http: HttpClient,
    private formBuilder: FormBuilder,
    private frameService: FrameService,
    private toastr: ToastrService
  ) {
    this.imageForm = this.formBuilder.group({});
  }

  ngOnInit(): void {

    // On doit s'adresser à l'un des deux end-points concernés du FrameController :
    //@PostMapping("/uploadfile")
    // public ResponseEntity<?> uploadFile( @RequestParam("uploadfile") MultipartFile uploadfile, 
    // RedirectAttributes redirectAttributes), ou    
    //@PostMapping("/upload")
    // public String handleFileUpload(@RequestParam("file") MultipartFile file, 
    // RedirectAttributes redirectAttributes)
  }

  // ---> Nouvelles méthodes pour remplacer ng2-file-upload <--- //
  /* 
    onDragOver(event: DragEvent): void {
      event.preventDefault();
      event.stopPropagation();
      this.hasBaseDropZoneOver = true;
    }
  
    onDragLeave(event: DragEvent): void {
      event.preventDefault();
      event.stopPropagation();
      this.hasBaseDropZoneOver = false;
    }
  
    onDrop(event: DragEvent): void {
      event.preventDefault();
      event.stopPropagation();
      this.hasBaseDropZoneOver = false;
  
      const files = event.dataTransfer?.files;
      if (files && files.length > 0) {
        Array.from(files).forEach(file => this.uploadFile(file));
      }
    }
  
    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        Array.from(input.files).forEach(file => this.uploadFile(file));
      }
    }
  
    uploadFile(file: File): void {
      const formData = new FormData();
      formData.append('file', file, file.name);
      this.http.post(this.uploadUrl, formData).subscribe({
        next: (response) => console.log('Fichier envoyé avec succès', response),
        error: (err) => console.error('Erreur lors de l\'envoi', err)
      });
    } */

  //  ====  Télécharger une image en Angular.docx  ====
  // Voir aussi https://stackblitz.com/edit/angular-file-upload-gcbfhf?file=app/app.component.ts
  public percentDone: number = 0;
  public uploadSuccess: boolean = false;
  //pick from one of the 4 styles of file uploads
  uploadImage(files: File[]) {
    //this.frameService.basicUploadImage(files);
    this.frameService.uploadImageAndProgress(files);
    //uploadImage(file: File) {
    //this.frameService.basicUploadSingleImage(file);
    //this.frameService.uploadSingleImageAndProgress(file);
  }


  //  ====  Upload crop image Springboot Ajax.docx ?  ====
  public onFileClick(): void {
    console.log("onFileClick was called");
    this.router.navigate(['/', 'api', 'upload']);
    // On récupère l'objet FileList qui contient les informations sur les fichiers sélectionnés
  }


  // Article https://onecodex.ch/blog/createacustomstyledfileuploadinangular9 :
  public router!: Router;
  public responses!: any[];
  public hasBaseDropZoneOver = false;   // => Pourrait être défini plus haut
  public imageForm!: FormGroup;   // => Pourrait être défini plus haut
  //public uploader!: FileUploader;
  // constructor(private formBuilder: FormBuilder) {
  //   this.imageForm = this.formBuilder.group({});
  // }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
