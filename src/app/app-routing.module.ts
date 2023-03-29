import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PublicacionesComponent } from './paginas/publicaciones/publicaciones.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
  { path: 'categorias', component: CategoriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
