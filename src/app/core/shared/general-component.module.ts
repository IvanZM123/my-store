import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterial } from '../material/angular-material';

import { OrderStickerComponent } from '../components/order-sticker/order-sticker.component';

@NgModule({
  declarations: [
    OrderStickerComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports: [
    AngularMaterial,
    OrderStickerComponent
  ]
})
export class GeneralComponentModule {}
