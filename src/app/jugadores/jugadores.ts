import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JUGADORES } from '../datos-jugadores';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jugadores.html',
  styleUrls: ['./jugadores.css']
})
export class JugadoresComponent {
  jugadores = JUGADORES;
}