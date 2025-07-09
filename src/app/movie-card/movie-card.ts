import { Component, Input } from '@angular/core';
import { Movie } from '../movies-list/Movie';
import { FavoritesMovies } from '../favorites-movies';
import { MovieReproductor } from '../movie-reproductor/movie-reproductor';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  // Recibe una película como input y la muestra en el componente
  @Input()
  movie!: Movie;

  videoVisible: boolean = false;
  currentVideoUrl: string = '';

  constructor(public favoritesMovies: FavoritesMovies) { }

  toggleFavorite(movie: Movie) {    
    //cambia el valor de isFavorite a su contrario;
    movie.isFavorite = !movie.isFavorite;
    //llama al servicio de favoritos para agregar o quitar la película de la lista de favoritos
    this.favoritesMovies.toggleFavorite(movie);    
  }

  //setea la url del video a reproducir y muestra el modal
  playVideo(url: string) {
    this.currentVideoUrl = url;
    this.videoVisible = true;
  }

  closeVideo() {
    this.videoVisible = false;
    this.currentVideoUrl = '';
  }

  
}
