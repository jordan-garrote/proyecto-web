import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarTorneosPageRoutingModule } from './buscar-torneos-routing.module';

import { BuscarTorneosPage } from './buscar-torneos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarTorneosPageRoutingModule
  ],
  declarations: [BuscarTorneosPage]
})
export class BuscarTorneosPageModule {}
