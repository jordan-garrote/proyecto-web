import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionBuscarTorneoPageRoutingModule } from './seleccion-buscar-torneo-routing.module';

import { SeleccionBuscarTorneoPage } from './seleccion-buscar-torneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionBuscarTorneoPageRoutingModule
  ],
  declarations: [SeleccionBuscarTorneoPage]
})
export class SeleccionBuscarTorneoPageModule {}
