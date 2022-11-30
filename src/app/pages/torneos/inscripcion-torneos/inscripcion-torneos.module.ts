import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscripcionTorneosPageRoutingModule } from './inscripcion-torneos-routing.module';

import { InscripcionTorneosPage } from './inscripcion-torneos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscripcionTorneosPageRoutingModule
  ],
  declarations: [InscripcionTorneosPage]
})
export class InscripcionTorneosPageModule {}
