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

  successMessage = '';
  errorMessage = '';

  constructor(private moviesData: MoviesData) {}

  onMovieSubmit(movie: Movie) {
    this.successMessage = '';
    this.errorMessage = '';

    this.moviesData.postMovie(movie).subscribe({
      next: (res) => {
        this.successMessage = '✅ Película agregada con éxito';
        console.log('🎬 POST ok:', res);
      },
      error: (err) => {
        this.errorMessage = err.message || '❌ Error al agregar película';
        console.error('Error al hacer POST:', err);
      }
    });
  }
}
