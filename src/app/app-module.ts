import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MovieReproductor } from './movie-reproductor/movie-reproductor';
import { MovieCard } from './movie-card/movie-card';
import { MoviesList } from './movies-list/movies-list';
import { MoviesContact } from './movies-contact/movies-contact';
import { WatchList } from './watch-list/watch-list';
import { MoviesHome } from './movies-home/movies-home';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    MovieReproductor,
    MovieCard,
    MoviesList,   
    MoviesContact, 
    WatchList,
    MoviesHome,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
