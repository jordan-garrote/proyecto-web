import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisTorneosPage } from './mis-torneos.page';

const routes: Routes = [
  {
    path: '',
    component: MisTorneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisTorneosPageRoutingModule {}
