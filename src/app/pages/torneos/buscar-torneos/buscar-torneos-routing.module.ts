import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarTorneosPage } from './buscar-torneos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarTorneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarTorneosPageRoutingModule {}
