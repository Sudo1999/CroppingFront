import { Component, OnInit, VERSION, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileItem, FileUploader, FileUploadModule } from 'ng2-file-upload';
import { ToastrService } from '@iqx-limited/ngx-toastr';
/* Télécharger une image avec Angular.docx (Avec un serveur Express.js) */
/* https://roufid.com/angular-file-upload-spring-boot */
const UploadUrl = 'http://localhost:8080/api/store';

@Component({
    selector: 'app-sendfile',
    templateUrl: './sendfile.component.html',
    styleUrl: './sendfile.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [
      FileUploadModule,
      CommonModule
    ]
})
export class SendfileComponent implements OnInit {

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
      url: UploadUrl,
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
 
  fileOverAnother(event: any): void {
    this.isDropOver = event;
  }

  fileClicked() {
    this.fileInput.nativeElement.click();
  }
}
