import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterial } from '../material/angular-material';

import { OrderStickerComponent } from '../components/order-sticker/order-sticker.component';
import { ClientTableComponent } from '../components/client-table/client-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderStickerComponent,
    ClientTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterial
  ],
  exports: [
    AngularMaterial,
    OrderStickerComponent,
    ClientTableComponent
  ]
})
export class GeneralComponentModule {}
