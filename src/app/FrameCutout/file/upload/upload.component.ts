import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { FrameService } from '../../../Service/frame.service';

@Component({
  selector: 'app-upload',
  /* Issu de Télécharger une image en Angular.docx : */
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

  // Pour l'article Télécharger une image en Angular.docx :
  public percentDone: number = 0;
  public uploadSuccess: boolean = false;  

  uploadImages(files: File[]) {
    this.frameService.uploadImageAndProgress(files);
  }

  // Pour l'article Télécharger une image avec Angular.docx :
  public baseUrl = "http://localhost:8080/api/file/";
  public uploader: FileUploader = new FileUploader({    // options: FileUploaderOptions
    url: this.baseUrl,
    itemAlias: 'image'
  });

  // Pour l'article https://onecodex.ch/blog/createacustomstyledfileuploadinangular9 :

  public router!: Router;
  public responses!: any[];
  public hasBaseDropZoneOver = false;
  public imageForm: FormGroup;
  //public uploader: FileUploader;  // Duplicate identifier 'uploader' (voir au-dessus)

  constructor(private formBuilder: FormBuilder, private frameService: FrameService) {
    this.imageForm = this.formBuilder.group({});
  }

  public onFileClick(): void {
    console.log("onFileClick was called");
    this.router.navigate(['/', 'api', 'upload']);
    // On récupère l'objet FileList qui contient les informations sur les fichiers sélectionnés
  }

  ngOnInit(): void {    
    // On doit s'adresser à l'un des deux end-points concernés du FrameController :

    // @RequestMapping(value = "/uploadfile", method = RequestMethod.POST)
    // @ResponseBody
    // public ResponseEntity<?> uploadFile( @RequestParam("uploadfile") MultipartFile uploadfile, 
    // RedirectAttributes redirectAttributes), ou
    
    // @PostMapping("/upload")
    // public String handleFileUpload(@RequestParam("file") MultipartFile file, 
    // RedirectAttributes redirectAttributes)
    // this.route.params.subscribe((routeParams: Params) => {
    //   let fullname = routeParams['fullname'];
    //   this.fileUrl = "http://localhost:8080/api/file/" + fullname;
    // });
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
