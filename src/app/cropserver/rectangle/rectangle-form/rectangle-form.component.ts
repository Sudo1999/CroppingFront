/* ng g component rectangle-form */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Rectangle } from '../rectangle';
import { RectangleService } from '../rectangle.service';

@Component({
  selector: 'app-rectangle-form',
  // Ce sélecteur ne correspond à aucune balise <app-rectangle-form></app-rectangle-form>.
  // C'est par une navigation via des liens qu'on accède à la page.
  templateUrl: './rectangle-form.component.html',
  styleUrl: './rectangle-form.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class RectangleFormComponent {

  public rectangle: Rectangle;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rectangleService: RectangleService) {
    this.rectangle = new Rectangle();
  }

  onSubmit() {
    this.rectangleService.save(this.rectangle).subscribe(result =>
      this.gotoRectangleList());
  }

  gotoRectangleList() {
    this.router.navigate(['/rectangles']);
  }
}
