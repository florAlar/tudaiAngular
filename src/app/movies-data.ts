import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movies-list/Movie';
import { Observable, BehaviorSubject } from 'rxjs';

const URL = 'https://686c628d14219674dcc7e6b5.mockapi.io/exaflix/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesData {

  /* Use Behavior Subject para que se mantenga el estado de las peliculas, cuando navegaba hacia
  otro componente, el estado de isFavorite de las peliculas se perdia,
   y al volver a la lista de peliculas, no se mostraban las peliculas cargadas, y se desincronizaban las listas */

  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  public movies$: Observable<Movie[]> = this.moviesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadMovies();
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(URL);
  }

  private loadMovies(): void {
    this.getMovies().subscribe({
      next: (movies: Movie[]) => {
        this.moviesSubject.next(movies);
      },
      error: (err) => console.error('Error loading movies:', err)
    });
  }
}
