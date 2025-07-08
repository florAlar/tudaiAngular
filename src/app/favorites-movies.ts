import { Injectable } from '@angular/core';
import { Movie } from './movies-list/Movie'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FavoritesMovies {

  

  private _favoritesMovies : Movie[] = [];
  favoriteMovies: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(this._favoritesMovies);
  constructor() { }


   getFavorites(): Movie[] {
    return this._favoritesMovies;
  }

   isFavorite(movie: Movie): boolean {
    return this._favoritesMovies.some(fav => fav.id === movie.id);
  }

  /*en vez de hacer un metodo add hice toogle que agrega o elimina la pelicula de la lista de favoritos
   segun el valor de la variable boolean isFavorite.*/

    toggleFavorite(movie: Movie): void {

    if (this.isFavorite(movie)) {
      //si la pelicula ya esta en favoritos, utilizamos filter para eliminarla del arreglo.
      this._favoritesMovies = this._favoritesMovies.filter(fav => fav.id !== movie.id);
    } else {
      //si la pelicula no esta en favoritos, la agregamos al arreglo.
      this._favoritesMovies.push(movie);
    }
    //notificamos a los suscriptores del cambio en la lista de favoritos.(si los hubiera)
    this.favoriteMovies.next([...this._favoritesMovies]);
  } 
 
}
