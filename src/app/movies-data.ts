import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movies-list/Movie';
import { Observable, BehaviorSubject,tap } from 'rxjs';

const URL = 'https://686c628d14219674dcc7e6b5.mockapi.io/exaflix/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesData {

  /* Use Behavior Subject para que se mantenga el estado de las peliculas, cuando navegaba hacia
   otro componente, el estado de isFavorite de las peliculas se perdia,
   y al volver a la lista de peliculas, no se mostraban las peliculas cargadas, 
   y se desincronizaban las listas */

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
  


  //debo convertir la URL de YouTube a un formato de embed para poder mostrar el video en un iframe
  private convertToEmbed(url?: string): string | null {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  }

  postMovie(movie: Movie): Observable<Movie> {
  const embedUrl = this.convertToEmbed(movie.url);
  if (!embedUrl) {
    throw new Error('URL de YouTube no válida');
  }

  const movieToPost: Movie = { ...movie, url: embedUrl };

  return this.http.post<Movie>(URL, movieToPost).pipe(
    tap((newMovie) => {
      const currentMovies = this.moviesSubject.getValue();
      this.moviesSubject.next([...currentMovies, newMovie]);
    })
  );
}
}
 