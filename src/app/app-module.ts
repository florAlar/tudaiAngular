import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MoviesList } from './movies-list/movies-list';
import { WatchList } from './watch-list/watch-list';
import { MovieReproductorComponent } from './movie-reproductor/movie-reproductor';

@NgModule({
  declarations: [
    App,
    MoviesList,
    WatchList,
    MovieReproductorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
