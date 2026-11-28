//import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from '@iqx-limited/ngx-toastr'; // Remplace ngx-toastr qui remplaçait ToastrModule.forRoot() (vide pour ngx-mat-toast)
import { routes } from './app.routes'; // Les routes extraites de app-routing.module.ts (devenu app.routes.ts)
import { RectangleService } from './cropserver/rectangle/rectangle.service';
import { FrameService } from './getimage/frame/frame.service';

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