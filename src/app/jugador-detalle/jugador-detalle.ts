import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JUGADORES, Jugador } from '../datos-jugadores';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jugador-detalle',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './jugador-detalle.html',
  styleUrls: ['./jugador-detalle.css']
})
export class JugadorDetalleComponent {
  private route = inject(ActivatedRoute);
  jugador?: Jugador;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jugador = JUGADORES.find(j => j.id === id);
  }
}
