import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscripcionTorneosPage } from './inscripcion-torneos.page';

const routes: Routes = [
  {
    path: '',
    component: InscripcionTorneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionTorneosPageRoutingModule {}
