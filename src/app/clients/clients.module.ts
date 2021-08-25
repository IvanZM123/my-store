import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';

import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { ClientDetailsPageComponent } from './pages/client-details-page/client-details-page.component';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';

@NgModule({
  declarations: [
    ClientListPageComponent,
    ClientDetailsPageComponent,
    AddClientPageComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule {}
