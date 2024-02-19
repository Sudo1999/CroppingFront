// frame.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exo } from './exo.model';

@Injectable({
  providedIn: 'root'
})

export class ExoService {

  private apiUrl = 'http://localhost:8080/api/exo/process';

  constructor(private http: HttpClient) { }

  processExo(file: File, exo: Exo): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('exo', JSON.stringify(exo));

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(this.apiUrl, formData, {
      headers: headers,
      responseType: 'blob'
    });
  }
}
