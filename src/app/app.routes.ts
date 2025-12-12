import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { JugadoresComponent } from './jugadores/jugadores';
import { JugadorDetalleComponent } from './jugador-detalle/jugador-detalle';
import { AcercaComponent } from './acerca/acerca';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'jugadores', component: JugadoresComponent },
    { path: 'jugadores/:id', component: JugadorDetalleComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: '**', component: NotFoundComponent }
];
