/// Simo Partanen 1900414

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftPage } from './soft.page';

const routes: Routes = [
  {
    path: '',
    component: SoftPage
  },
  {
    path: 'soft',
    redirectTo: '/soft',
    },
    {
    path: 'technical',
    redirectTo: '/technical',
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftPageRoutingModule {}
