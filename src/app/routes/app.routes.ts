import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir '/' a '/home'
  { path: 'home', component: HomeComponent } // Cargar el componente HomeComponent
];
