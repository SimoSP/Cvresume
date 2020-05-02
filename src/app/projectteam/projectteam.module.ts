/// Simo Partanen 1900414

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectteamPageRoutingModule } from './projectteam-routing.module';

import { ProjectteamPage } from './projectteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectteamPageRoutingModule
  ],
  declarations: [ProjectteamPage]
})
export class ProjectteamPageModule {}
