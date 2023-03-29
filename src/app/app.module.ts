import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionesComponent } from './paginas/publicaciones/publicaciones.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicacionesComponent,
    CategoriasComponent,
    InicioComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
