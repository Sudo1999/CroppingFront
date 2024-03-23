import { Component, VERSION, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { FrameService } from '../../services/frame.service';

@Component({
  selector: 'app-imageupload',
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
  templateUrl: './imageupload.component.html',
  styleUrl: './imageupload.component.css'
})
export class ImageuploadComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private frameService: FrameService,
    private toastr: ToastrService,
    private http: HttpClient) {
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
  public hasBaseDropZoneOver = false;
  public imageForm!: FormGroup;
  public uploader!: FileUploader;
  // constructor(private formBuilder: FormBuilder) {
  //   this.imageForm = this.formBuilder.group({});
  // }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
