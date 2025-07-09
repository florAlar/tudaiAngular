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
import {  formAddMovie } from './add-form/add-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MovieReproductor,
    MovieCard,
    MoviesList,   
    MoviesContact, 
    WatchList,
    MoviesHome,
    formAddMovie,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
