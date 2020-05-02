/// Simo Partanen 1900414

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnicalPage } from './technical.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalPage,
    },
    {
    path: 'soft',
    redirectTo: '/soft',
    },
    {
    path: 'technical',
    redirectTo: '/technical',
    }
    
  ]
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalPageRoutingModule {}
