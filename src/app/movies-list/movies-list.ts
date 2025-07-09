import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { MoviesData } from '../movies-data';
import { MovieCard } from '../movie-card/movie-card';
import { MovieReproductor } from '../movie-reproductor/movie-reproductor';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.scss'],
  standalone: false
})
export class MoviesList {
  movies: Observable<Movie[]>;

  constructor(private moviesData: MoviesData) {
    this.movies = this.moviesData.movies$;
  }
}

/*   ngOnInit() {
    this.moviesData.getMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies;
      }
    })
  } */
/* 


export class MoviesList {
  
 
} */
