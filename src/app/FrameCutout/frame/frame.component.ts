/* ng g component frame */
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { FrameService } from '../../Service/frame.service';
import { Cutout } from '../cutout';

@Component({
  selector: 'app-frame',
  template: `
    <input type="file" accept=".jpg,.png" class="button" (change)="uploadImages($event.target.files)" />
    <p> Upload Percent: {{ percentDone }}% </p>
    <br />
    <ng-container *ngIf="uploadSuccess" class="success">
      <p class="success">Upload Successful</p>
    </ng-container>`,
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css'
})
export class FrameComponent {

  public file!: File;
  public cutout!: Cutout;
  public processedFrame!: Blob;
  public percentDone: number = 0;
  public uploadSuccess: boolean = false;

  constructor(private frameService: FrameService) {}
  //constructor(private http: HttpClient) {}

  fileChange(event: any) {
    this.file = event.target.files[0];
  }

  uploadImages(files: File[]) {
    this.frameService.uploadImageAndProgress(files);
  }

  processFrame() {
    this.frameService.processFrame(this.file, this.cutout).subscribe(
      (data: Blob) => {
        this.processedFrame = data; },
      error => {
        console.error('Error processing frame', error); }
    );
  }
}
