import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GeneralComponentModule } from '../../core/shared/general-component.module';

import { HomeComponent } from './pages/home/home.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ItemCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GeneralComponentModule
  ]
})
export class HomeModule {}
