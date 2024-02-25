import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cutout } from '../cutout';

@Injectable({
  providedIn: 'root'
})
export class CutoutService {

  ////  ==== Méthode /process ====  ////

  private apiUrl = 'http://localhost:8080/api/cutout/process';

  constructor(private http: HttpClient) { }

  process(file: File, cutout: Cutout): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('cutout', JSON.stringify(cutout));

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(this.apiUrl, formData, {
      headers: headers,
      responseType: 'blob'
    });
  }
}
