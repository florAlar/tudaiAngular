import { Component } from '@angular/core';
import { FavoritesMovies } from '../favorites-movies';
import { Movie } from '../movies-list/Movie'; // Ajustá la ruta si es necesario


@Component({
  selector: 'app-watch-list',
  standalone: false,
  templateUrl: './watch-list.html',
  styleUrl: './watch-list.scss'
})

export class WatchList {


  constructor(private favoritesMovies: FavoritesMovies) {} 
   
  get favorites(): Movie[] {
    return this.favoritesMovies.getFavorites();
  }

  
}
