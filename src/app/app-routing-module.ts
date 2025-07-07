import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesContact } from './movies-contact/movies-contact';
import { MoviesHome } from './movies-home/movies-home'; 

const routes: Routes = [
   {
    path: '',
    component: MoviesHome,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: MoviesContact,
    pathMatch: 'full', 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
