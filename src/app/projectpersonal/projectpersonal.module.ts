/// Simo Partanen 1900414

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectpersonalPageRoutingModule } from './projectpersonal-routing.module';

import { ProjectpersonalPage } from './projectpersonal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectpersonalPageRoutingModule
  ],
  declarations: [ProjectpersonalPage]
})
export class ProjectpersonalPageModule {}
