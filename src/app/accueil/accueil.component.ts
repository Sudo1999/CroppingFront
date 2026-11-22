/* ng g component accueil */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [RouterLink]
})
export class AccueilComponent {
}
