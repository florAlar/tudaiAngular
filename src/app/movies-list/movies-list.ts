import { Component } from '@angular/core';

import { Movie } from './Movie';

 // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.scss'],
  standalone: false,

})
export class MoviesList {

  movies: Movie[] = [
    {
      id: 101,
      title: "El misterio de Peacock",
      overview: "Un hombre con doble personalidad esconde su vida secreta en un pueblo tranquilo.",
      year: 2010,
      poster: "assets/img/peacock.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/PEhYVYKMRms"
    },
    {
      id: 102,
      title: "Viaje Infinito",
      overview: "Una exploración cósmica que desafía los límites de la realidad.",
      year: 2012,
      poster: "assets/img/viajeinfinito.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/hpfTQF3q4qs"
    },
    {
      id: 103,
      title: "La última puerta",
      overview: "Un coleccionista de libros raros se ve envuelto en una conspiración demoníaca.",
      year: 1999,
      poster: "assets/img/ultimapuerta.jpg",
      isFavorite: false,
      isNew: true,
      url: "https://www.youtube.com/embed/h7nDh4ow4CM"
    },
    {
      id: 104,
      title: "Un oso rojo",
      overview: "Un exconvicto intenta reencontrarse con su hija mientras busca justicia.",
      year: 2002,
      poster: "assets/img/unosorojo.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/RZNzdxz3qyk"
    },
    {
      id: 105,
      title: "Perros de reserva",
      overview: "Un atraco sale mal y la desconfianza crece entre los criminales.",
      year: 1992,
      poster: "assets/img/perrosdereserva.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/Q476bP2Otjo"
    },
    {
      id: 106,
      title: "Destino anunciado",
      overview: "Una historia contada al revés sobre la inevitable tragedia de una familia.",
      year: 2006,
      poster: "assets/img/destinoanunciado.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/yH_tANrGH0g"
    },
    {
      id: 107,
      title: "Mortdecai",
      overview: "Un excéntrico comerciante de arte se ve envuelto en una conspiración global.",
      year: 2015,
      poster: "assets/img/mortdecai.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/qq0tVBtDQ94"
    },
    {
      id: 108,
      title: "Tesis sobre un homicidio",
      overview: "Un profesor sospecha que uno de sus alumnos está involucrado en un crimen.",
      year: 2013,
      poster: "assets/img/tesis.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/orDIxEfqcVI"
    },
    {
      id: 109,
      title: "Hellboy contra el demonio ancestral",
      overview: "Hellboy se enfrenta a un enemigo mitológico que amenaza a la humanidad.",
      year: 2008,
      poster: "assets/img/hellboy.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/ZSvWprscQFU"
    },
    {
      id: 110,
      title: "Plan en Las Vegas",
      overview: "Cuatro amigos de la infancia se reencuentran para una despedida de soltero en Las Vegas.",
      year: 2013,
      poster: "assets/img/planlasvegas.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/5KROpD2wOeE"
    },
    {
      id: 111,
      title: "Highlander",
      overview: "Un inmortal lucha a través de los siglos en una batalla épica.",
      year: 1986,
      poster: "assets/img/highlander.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/jkbNKAwDsFY"
    },
    {
      id: 112,
      title: "Prisionero del demonio",
      overview: "Un joven es poseído por una entidad maligna y lucha por liberarse.",
      year: 2020,
      poster: "assets/img/prisionerodemonio.jpg",
      isFavorite: false,
      url: "https://www.youtube.com/embed/vESyqydO1lQ"
    }

  ]


}
