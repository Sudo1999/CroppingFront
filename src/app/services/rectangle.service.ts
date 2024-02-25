/* ng g service rectangle */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rectangle } from '../framecutout/rectangle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RectangleService {

  private rectanglesUrl!: string;

  constructor(private http: HttpClient) {
    this.rectanglesUrl = 'http://localhost:8080/rectangles';
  }

  public findAll(): Observable<Rectangle[]> {
    return this.http.get<Rectangle[]>(this.rectanglesUrl);
  }
  // The findAll() method performs a GET HTTP request to the http://localhost:8080/rectangles endpoint
  // via Angular’s HttpClient. The method returns an Observable instance that holds an array of Rectangle objects.

  public save(rectangle: Rectangle) {
    return this.http.post<Rectangle>(this.rectanglesUrl, rectangle);
  }
  // The save() method performs a POST HTTP request to the http://localhost:8080/rectangles endpoint.
  // By specifying the type Rectangle in the HttpClient‘s request methods,
  // we can consume back-end responses in an easier and more effective way.
}
