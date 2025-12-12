export interface Jugador {
  id: number;
  nombre: string;
  equipo?: string;
  posicion?: string;
}

export const JUGADORES: Jugador[] = [
  { id: 1, nombre: 'Pelé', equipo: 'Brasil', posicion: 'Delantero' },
  { id: 2, nombre: 'Diego Maradona', equipo: 'Argentina', posicion: 'Mediocampista' },
  { id: 3, nombre: 'Lionel Messi', equipo: 'Argentina', posicion: 'Delantero' }
];
