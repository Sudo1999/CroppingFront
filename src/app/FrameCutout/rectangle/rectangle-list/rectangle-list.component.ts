/* ng g component rectangleList */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RectangleService } from '../../../services/rectangle.service';
import { Rectangle } from '../../rectangle';

@Component({
  selector: 'app-rectangle-list',
  // Ce sélecteur ne correspond à aucune balise <app-rectangle-list></app-rectangle-list>.
  // C'est par une navigation via des liens qu'on accède à la page.
  templateUrl: './rectangle-list.component.html',
  styleUrl: './rectangle-list.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [RouterLink]
})
export class RectangleListComponent implements OnInit {

  public rectangles!: Rectangle[];

  constructor(private rectangleService: RectangleService) { }

  ngOnInit(): void {
    this.rectangleService.findAll().subscribe(data => {
      this.rectangles = data;
    });
  }
}
