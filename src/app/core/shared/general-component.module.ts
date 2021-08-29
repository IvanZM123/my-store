import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterial } from '../material/angular-material';

import { DollarPricePipe } from '../pipes/dollar-price.pipe';

import { OrderStickerComponent } from '../components/order-sticker/order-sticker.component';
import { ClientTableComponent } from '../components/client-table/client-table.component';

@NgModule({
  declarations: [
    OrderStickerComponent,
    ClientTableComponent,
    DollarPricePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterial
  ],
  exports: [
    AngularMaterial,
    OrderStickerComponent,
    ClientTableComponent,
    DollarPricePipe
  ]
})
export class GeneralComponentModule {}
