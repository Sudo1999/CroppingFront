import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [
      RouterOutlet,
      AccueilComponent
    ]
})
export class AppComponent {

  public title: string;

  constructor() {
    this.title = 'Application Spring Boot - Angular';
  }
}
