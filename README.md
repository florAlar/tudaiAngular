# 🎬 EXAFlix

EXAFlix es una aplicación web desarrollada con **Angular** como parte de un proyecto académico. Permite agregar películas, marcarlas como favoritas y reproducir trailers directamente desde YouTube mediante una interfaz simple, moderna y reactiva.

> Proyecto desarrollado con fines educativos para la carrera de Desarrollo de Aplicaciones Web (TUDAI).

---

##  Tecnologías utilizadas

- **Angular** (con uso de Control Flow)
- **TypeScript**
- **Bootstrap 5**
- **Reactive Forms**
- **RxJS / BehaviorSubject**
- **MockAPI** (para simular backend)
- **YouTube Embed Iframe**

---

##  Funcionalidades principales

- ✅ Agregar nuevas películas mediante formulario reactivo
- ✅ Validación de campos en tiempo real
- ✅ Reproducción de trailers (YouTube embebido)
- ✅ Marcar películas como favoritas
- ✅ Listado de populares y favoritas
- ✅ Persistencia simulada con MockAPI

---

## Estructura del Proyecto

```
src/
└── app/
    ├── add-form/             # Formulario para agregar películas
    ├── movie-card/           # Tarjeta de película con botones de "me gusta" y "reproducir"
    ├── movie-reproductor/    # Modal para reproducir trailers
    ├── movies-contact/       # Página donde se agrega la película
    ├── movies-home/          # Página principal (inicio)
    ├── movies-list/          # Lista de películas desde MockAPI
    ├── watch-list/           # Lista de películas favoritas
    ├── movies-data.ts        # Servicio de datos (MockAPI + estado global)
    ├── favorites-movies.ts   # Servicio para gestión de favoritos
    ├── Movie.ts              # Modelo de datos de Películas
    └── app-routing.module.ts # Rutas: "/", "/add"
```


##  Validaciones del formulario

Formulario reactivo en Angular con validaciones:

- Todos los campos son requeridos. 
- Cartelera (URL) : debe ser una URL válida de imagen (.jpg, .png, .jpeg) 
- Video (URL) : debe ser una URL de YouTube válida (`watch?v=` o `youtu.be/`) 

---

##  Interfaz visual

- Navbar con rutas a Inicio y Agregar
- Listado principal con tarjetas de películas
- Indicadores visuales de "🎞 EN EL CINE"
- Botón "❤️ / 🤍" para favoritos
- Modal para reproducción de video en iframe

---

##  API utilizada

- [MockAPI.io](https://mockapi.io)  
  Endpoint:  
  `https://686c628d14219674dcc7e6b5.mockapi.io/exaflix/movies`

---

##  Cómo ejecutar el proyecto

1. Abrí el proyecto en StackBlitz:
   [Abrir EXAFlix en StackBlitz](https://stackblitz.com/~/github.com/florAlar/tudaiAngular) 

2. O ejecutalo localmente:
```bash
git clone https://github.com/florAlar/tudaiAngular
cd tudaiAngular
npm install
ng serve