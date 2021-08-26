import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationComponent } from './components/notification/notification.component';

import { AngularMaterial } from "./material/angular-material";

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports: [
    NotificationComponent,
    AngularMaterial
  ]
})
export class CoreModule {}
