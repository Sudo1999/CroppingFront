import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string;

  constructor() {
    this.title = 'Application Spring Boot - Angular';
  }
}
