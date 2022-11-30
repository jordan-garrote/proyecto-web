import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisTorneosPageRoutingModule } from './mis-torneos-routing.module';

import { MisTorneosPage } from './mis-torneos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisTorneosPageRoutingModule
  ],
  declarations: [MisTorneosPage]
})
export class MisTorneosPageModule {}
