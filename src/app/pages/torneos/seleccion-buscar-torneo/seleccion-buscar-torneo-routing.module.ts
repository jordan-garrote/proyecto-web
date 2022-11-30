import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionBuscarTorneoPage } from './seleccion-buscar-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionBuscarTorneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionBuscarTorneoPageRoutingModule {}
