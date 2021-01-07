import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CappelliPageRoutingModule } from './cappelli-routing.module';

import { CappelliPage } from './cappelli.page';
import { ComponentsModule } from '../component.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CappelliPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CappelliPage]
})
export class CappelliPageModule {}
