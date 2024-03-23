/* ng g service frame */
import { Component, VERSION, OnInit, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { Frame } from '../framecutout/frame';
import { ResourceLoader } from '@angular/compiler';
import { Cutout } from '../framecutout/cutout';

@Injectable({
  providedIn: 'root'
})
export class FrameService {
  
  private processUrl = 'http://localhost:8080/api/frame/process';
  private framesUrl!: string;
  private frameGet!: string;
  private percentDone!: number;
  private uploadSuccess!: boolean;

  constructor(private router: Router, private http: HttpClient) {
    this.framesUrl = 'http://localhost:8080/api/';
    this.frameGet = 'http://localhost:8080/api/file/';
  }

  public createFrameWithPath(path: string): Frame {
    let frame = new Frame();
    frame.path = path;
    let sections = path.split("\\");
    let last = sections.length - 1;
    frame.fullname = sections[last];
    return frame;
  }

  public findAll(): Observable<String[]> {
    return this.http.get<String[]>(this.framesUrl);
  }
   
  /* Le problème à résoudre : récupérer le ResponseEntity<Resource> que le back envoie. */
  public getFrame(fullname: string): Observable<String> {
    return this.http.get<String>(this.frameGet + fullname);
  }

  public buildFrame(fullname: string): Observable<Frame> {
    console.log("Dans buildFrame => " + `${this.frameGet}/${fullname}`);
    // => Dans buildFrame => http://localhost:8080/api/file/Image-chat.jpg
    console.log("Dans buildFrame => " + this.http.get<any>(`${this.frameGet}/${fullname}`));
    // => ERROR TypeError: Cannot read properties of undefined (reading 'get')
    // En effet, ce que je récupère du back, c'est un ResponseEntity<Resource>
    return this.http.get<any>(`${this.frameGet}/${fullname}`)
    .pipe(
      take(1),
      map((inputFrame: Frame) => {
        let frame: Frame = new Frame();
        frame.id = inputFrame.id;
        frame.path = inputFrame.path;
        frame.fullname = inputFrame.fullname;
        frame.upX = inputFrame.upX;
        frame.upY = inputFrame.upY;
        frame.width = inputFrame.width;
        frame.height = inputFrame.height;
        return frame;
      })
    );
  }


  //
  //  ====  Télécharger une image en Angular.docx  ====
  //  ======    (Voir le imageupload.component)    ======
  // (Voir aussi https://stackblitz.com/edit/angular-file-upload-gcbfhf?file=app/app.component.ts)
  //

  // Téléchargement de base pour plusieurs images dans Angular
  public basicUploadImage(files: File[]) {
    var formData = new FormData();
    Array.from(files).forEach((f) => formData.append('file', f));
    this.http.post('https://file.io', formData).subscribe((event) => {
      console.log('done');
    });
  }

  // Téléchargement de base pour une seule image dans Angular  
  // => This will fail since file.io dosen't accept this type of upload
  // but it is still possible to upload a file with this style
  public basicUploadSingleImage(file: File) {
    this.http.post('https://file.io', file).subscribe((event) => {
      console.log('done');
    });
  }

  // Téléchargement de plusieurs images avec une barre de progression
  public uploadImageAndProgress(files: File[]) {
    console.log(files);
    var formData = new FormData();
    Array.from(files).forEach((f) => formData.append('file', f));
    this.http.post('https://file.io', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round((100 * event.loaded) / (event.total || 1));
          this.percentDone = event.loaded;
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }

  // Téléchargement d'une seule image avec une barre de progression
  // => This will fail since file.io dosen't accept this type of upload
  // but it is still possible to upload a file with this style
  public uploadSingleImageAndProgress(file: File) {
    this.http.post('https://file.io', file, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          //this.percentDone = Math.round((100 * event.loaded) / event.total);
          this.percentDone = event.loaded;
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }
}
