import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AnimeService } from './services/anime.service';
import { EventsService } from './services/events.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()),
    AnimeService ,
    EventsService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
