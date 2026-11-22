//import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from '@iqx-limited/ngx-toastr';

// Remplace ngx-toastr qui remplaçait ToastrModule.forRoot() (ou vide pour ngx-mat-toast)
import { routes } from './app.routes';
// Les routes extraites de app-routing.module.ts (devenu app.routes.ts)
import { FrameService } from './services/frame.service';
import { RectangleService } from './services/rectangle.service';

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