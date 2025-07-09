import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movies-list/Movie';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.html',
  styleUrls: ['./add-form.scss'],
  standalone: false,
})

export class formAddMovie {

  @Output() submitMovie = new EventEmitter<Movie>();

  formAddMovies = new FormGroup({
    title: new FormControl('', [Validators.required]),
    genre: new FormControl('',[Validators.required]),
    poster: new FormControl('',[Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg))/)]),
    url: new FormControl('',
      [
        Validators.required,
        /* Permitimos unicamente una url de youtube */
        Validators.pattern(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/)
      ]
    ),
    isFavorite: new FormControl(false),
    isNew: new FormControl(false),

  });

  onSubmit() {
    if (this.formAddMovies.valid) {
      const movie: Movie = this.formAddMovies.value as Movie;
      this.submitMovie.emit(movie);      
    }
  }

}


/* Para el campo url de la pelicula, estamos considerando que el usuario puede o no ser tecnico. 
para el correcto funcionamiento de la app, se espera que en la api se ingrese una url de video de youtube,
por lo que se valida que la url comience con https://www.youtube.com/embed/...
Si el usuario no es tecnico, puede ingresar una url de youtube normal, y la app la convertira a la url de embed.
Si el usuario es tecnico, puede ingresar una url de embed directamente.

*/

