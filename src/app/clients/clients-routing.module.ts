import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientDetailsPageComponent } from './pages/client-details-page/client-details-page.component';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';

const routes: Routes = [
  {
    path: "",
    component: ClientListPageComponent
  },
  {
    path: "/:clientId",
    component: ClientDetailsPageComponent
  },
  {
    path: "",
    component: AddClientPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
