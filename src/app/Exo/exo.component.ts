// frame.component.ts
import { Component } from '@angular/core';
import { ExoService } from './exo.service';
import { Exo } from './exo.model';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.css']
})
export class ExoComponent {

  public file!: File;
  public exo!: Exo;
  public processedExo!: Blob;

  constructor(private exoService: ExoService) {}

  fileChange(event: any) {
    this.file = event.target.files[0];
  }

  processExo() {
    this.exoService.processExo(this.file, this.exo).subscribe(
      (data: Blob) => {
        this.processedExo = data; },
      error => {
        console.error('Error processing exo', error); }
    );
  }

  getExoUrl() {    
  }
}
