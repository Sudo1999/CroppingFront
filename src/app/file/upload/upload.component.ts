import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { FrameService } from '../../services/frame.service';

@Component({
  selector: 'app-upload',
  /* Télécharger une image en Angular.docx : Tout le html se trouve là. */
  template: `
    <input type="file" accept=".jpg,.png" class="button" (change)="uploadImages($event.target.files)" />
    <p> Upload Percent: {{ percentDone }}% </p>
    <br />
    <ng-container *ngIf="uploadSuccess" class="success">
      <p class="success">Upload Successful</p>
    </ng-container>`,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit {

  public onFileClick(): void {
    console.log("onFileClick was called");
    this.router.navigate(['/', 'api', 'upload']);
    // On récupère l'objet FileList qui contient les informations sur les fichiers sélectionnés
  }


  //  ====  Télécharger une image en Angular.docx  ====
  public percentDone: number = 0;
  public uploadSuccess: boolean = false;

  //constructor(private http: HttpClient) {}

  uploadImages(files: File[]) {
    this.frameService.uploadImageAndProgress(files);
  }


  //  ====  Télécharger une image avec Angular.docx  ====
  public baseUrl = "http://localhost:8080/api/file/";
  public uploader: FileUploader = new FileUploader({    // options: FileUploaderOptions
    url: this.baseUrl,
    itemAlias: 'image'
  });

  // constructor(private toastr: ToastrService) {}

  // ngOnInit() {
  //   this.uploader.onAfterAddingFile = (file) => {
  //     file.withCredentials = false;
  //   };
  //   this.uploader.onCompleteItem = (item: any, status: any) => {
  //     console.log('Uploaded File Details:', item);
  //     this.toastr.success('File successfully uploaded!');
  //   };
  // }


  // Article https://onecodex.ch/blog/createacustomstyledfileuploadinangular9 :

  public router!: Router;
  public responses!: any[];
  public hasBaseDropZoneOver = false;
  public imageForm: FormGroup;
  //public uploader: FileUploader;  // Duplicate identifier 'uploader' (voir au-dessus)

  // constructor(private formBuilder: FormBuilder) {
  //   this.imageForm = this.formBuilder.group({});
  // }

  // ngOnInit(): void {}

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  //  ====  UploadComponent en partage  ====
  

  constructor(private formBuilder: FormBuilder, private frameService: FrameService) {
    this.imageForm = this.formBuilder.group({});
  }

  ngOnInit(): void {    
    // On doit s'adresser à l'un des deux end-points concernés du FrameController :

    //@PostMapping("/uploadfile")
    // public ResponseEntity<?> uploadFile( @RequestParam("uploadfile") MultipartFile uploadfile, 
    // RedirectAttributes redirectAttributes), ou
    
    // @PostMapping("/upload")
    // public String handleFileUpload(@RequestParam("file") MultipartFile file, 
    // RedirectAttributes redirectAttributes)
  }
}
