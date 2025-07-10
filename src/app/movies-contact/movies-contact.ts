import { Component } from '@angular/core';
import { formAddMovie } from '../add-form/add-form';
import { Movie } from '../movies-list/Movie';
import { MoviesData } from '../movies-data';

@Component({
  selector: 'app-movies-contact',
  standalone: false,
  templateUrl: './movies-contact.html',
  styleUrl: './movies-contact.scss'
})
export class MoviesContact {

  constructor(private moviesData: MoviesData) {}

  onMovieSubmit(movie: Movie) {
   
    this.moviesData.postMovie(movie).subscribe({
      next: (res) => {
       console.log('🎬 POST ok:', res);
      },
      error: (err) => {
       console.error('Error al cargar una peli:', err);
      }
    });
  }
}
