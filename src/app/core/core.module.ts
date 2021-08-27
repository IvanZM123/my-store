import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';

import { NotificationComponent } from './components/notification/notification.component';

import { AngularMaterial } from "./material/angular-material";

@NgModule({
  declarations: [
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterial,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  exports: [
    NotificationComponent,
    AngularMaterial
  ]
})
export class CoreModule {}
