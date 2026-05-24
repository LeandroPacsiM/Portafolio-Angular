import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { ProyectoDetalle } from './components/proyecto-detalle/proyecto-detalle';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'proyecto/:slug', component: ProyectoDetalle },
  { path: '**', redirectTo: '' }
];
