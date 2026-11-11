/* ng g component accueil */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { FrameService } from '../services/frame.service';
import { Cutout } from '../framecutout/cutout';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccueilComponent {
}
