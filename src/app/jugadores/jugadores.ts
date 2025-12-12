import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JUGADORES, Jugador } from '../datos-jugadores';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugadores.html',    
  styleUrls: ['./jugadores.css']      
})
export class JugadoresComponent {
  lista: Jugador[] = JUGADORES;
}