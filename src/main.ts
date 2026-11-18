// L'architecture basée sur AppModule (CroppingFront\src\app\app.module.ts) est ancienne et a été remplacée par l'architecture Standalone (CroppingFront\src\app\app.config.ts) comme dans les projets Angular modernes.
// A la racine du projet : ng generate @angular/core:standalone (3 fois, une fois pour chacune des 3 étapes).

import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Obsolète

//platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], })
  //.catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
