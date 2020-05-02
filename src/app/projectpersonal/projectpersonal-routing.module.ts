/// Simo Partanen 1900414

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectpersonalPage } from './projectpersonal.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectpersonalPage
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
export class ProjectpersonalPageRoutingModule {}
