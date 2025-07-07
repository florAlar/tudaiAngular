import { Injectable } from '@angular/core';
import { Movie } from './movies-list/Movie'; // Ajustá la ruta si es necesario

@Injectable({
  providedIn: 'root',
})
export class FavoritesMovies {
  private favorites: Movie[] = [];

  getFavorites(): Movie[] {
    return this.favorites;
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites.some(fav => fav.id === movie.id);
  }

  toggleFavorite(movie: Movie): void {
    if (this.isFavorite(movie)) {
      this.favorites = this.favorites.filter(fav => fav.id !== movie.id);
    } else {
      this.favorites.push(movie);
    }
  }
}
