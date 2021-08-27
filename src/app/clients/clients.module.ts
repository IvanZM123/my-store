import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';

import { GeneralComponentModule } from '../core/shared/general-component.module';

import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { ClientDetailsPageComponent } from './pages/client-details-page/client-details-page.component';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';
import { ClientCardComponent } from './components/client-card/client-card.component';

@NgModule({
  declarations: [
    ClientListPageComponent,
    ClientDetailsPageComponent,
    AddClientPageComponent,
    ClientCardComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    GeneralComponentModule
  ]
})
export class ClientsModule {}
