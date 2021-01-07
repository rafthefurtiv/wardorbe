import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CappelliPage } from './cappelli.page';

const routes: Routes = [
  {
    path: '',
    component: CappelliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CappelliPageRoutingModule {}
