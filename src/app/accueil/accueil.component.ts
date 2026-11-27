/* ng g component accueil */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [ RouterLink ]
})

/* Note : les imports du haut (import { RouterLink } from '@angular/router';) appartiennent à TypeScript (pour la logique et le typage du fichier .ts), alors que ceux du bas (imports: [ RouterLink ]) appartiennent à Angular (pour le rendu du template .html). */

export class AccueilComponent {
}
