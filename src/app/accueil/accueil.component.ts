/* ng g component accueil */
import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { FrameService } from '../services/frame.service';
import { Cutout } from '../framecutout/cutout';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.css',
    standalone: false
})
export class AccueilComponent {
}
