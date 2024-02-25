// cutout.component.ts
import { Component } from '@angular/core';
import { CutoutService } from './cutout.service';
import { Cutout } from '../cutout';

@Component({
  selector: 'app-cutout',
  templateUrl: './cutout.component.html',
  styleUrls: ['./cutout.component.css']
})
export class CutoutComponent {

  ////  ==== Méthode /process ====  ////

  public file!: File;
  public cutout!: Cutout;
  public processedCutout!: Blob;

  constructor(private cutoutService: CutoutService) {}
  //constructor(private frameService: FrameService) {}

  fileChange(event: any) {
    this.file = event.target.files[0];
  }

  processCutout() {
    this.cutoutService.process(this.file, this.cutout).subscribe(
      (data: Blob) => {
        this.processedCutout = data; },
      error => {
        console.error('Error processing cutout', error); }
    );
  }

  getCutoutUrl() {    
  }
}
