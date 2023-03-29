import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  // ruta del servicio backend
  private readonly pathApi: string = 'http://localhost:3000/api';

  // inyectamos el HTTP para comunicarnos con el back
  private readonly httpClient = inject(HttpClient);

  constructor() {}

  // Obtenemos las publicaciones
  obtenerPublicaciones() {
    return this.httpClient.get(`${this.pathApi}/publicacion`);
  }

  // Obtener una publicacion
  obtenerPublicacion(id: string) {
    return this.httpClient.get(`${this.pathApi}/publicacion/${id}`);
  }

  // Crear publicacion
  crearPublicacion(publicacion: any) {
    return this.httpClient.post(`${this.pathApi}/publicacion`, publicacion);
  }
}
