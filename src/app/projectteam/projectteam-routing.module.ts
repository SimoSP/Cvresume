/// Simo Partanen 1900414

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectteamPage } from './projectteam.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectteamPage
  },
  {
    path: 'solo',
    redirectTo: '/projectpersonal',
    },
    {
    path: 'team',
    redirectTo: '/projectteam',
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectteamPageRoutingModule {}
