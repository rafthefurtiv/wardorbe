import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CappelliPageRoutingModule } from './cappelli-routing.module';

import { CappelliPage } from './cappelli.page';
import { CapoModule } from '../capo/capo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CappelliPageRoutingModule,
    CapoModule
  ],
  declarations: [CappelliPage]
})
export class CappelliPageModule {}
