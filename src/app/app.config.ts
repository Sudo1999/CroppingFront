import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { provideToastr } from '@iqx-limited/ngx-toastr'; // Remplace ngx-toastr qui remplçait ToastrModule.forRoot() (ou vide pour ngx-mat-toast)

import { routes } from './app.routes'; // Les routes extraites de app-routing.module.ts
import { RectangleService } from './services/rectangle.service';
import { FrameService } from './services/frame.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //provideAnimations(),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    provideToastr(),
    RectangleService,
    FrameService
  ]
};
