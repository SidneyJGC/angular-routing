import { Component, inject } from '@angular/core';
import { PublicacionService } from '../../servicios/publicacion.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent {
  public publicaciones: any[] = [];

  private readonly publicacionService = inject(PublicacionService);

  constructor() {}

  ngOnInit(): void {
    this.publicacionService.obtenerPublicaciones().subscribe({
      next: (publicaciones: any) => {
        this.publicaciones = publicaciones;
      },
    });
  }
}
