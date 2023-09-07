import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarSesionRoutingModule } from './iniciar-sesion-routing.module';
import { IniciarSesionComponent } from './iniciar-sesion.component';


@NgModule({
  declarations: [
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    IniciarSesionRoutingModule
  ]
})
export class IniciarSesionModule { }
