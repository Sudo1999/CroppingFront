import { Component, OnInit, VERSION, ElementRef, ViewChild } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
/* Télécharger une image avec Angular.docx (Avec un serveur Express.js) */
/* https://roufid.com/angular-file-upload-spring-boot */
const UploadUrl = 'http://localhost:8080/api/store';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrl: './fileuploader.component.css'
})
export class FileuploaderComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;
  public uploader!: FileUploader;
  public isDropOver!: boolean;

  constructor( 
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    
    const headers = [{
      name: 'Accept',
      value: 'application/json'
    }];

    this.uploader = new FileUploader({   // options: FileUploaderOptions
      url: 'http://localhost:8080/api/store',
      autoUpload: true,
      headers: headers
    });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {      
      console.log('Uploaded File Details:', item);
      this.toastr.success('File successfully uploaded!');
    };
  }
 
  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }

  fileClicked() {
    this.fileInput.nativeElement.click();
  }
}
