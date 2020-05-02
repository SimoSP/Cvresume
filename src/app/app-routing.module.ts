/// Simo Partanen 1900414
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'technical',
    loadChildren: () => import('./technical/technical.module').then( m => m.TechnicalPageModule)
  },
  {
    path: 'soft',
    loadChildren: () => import('./soft/soft.module').then( m => m.SoftPageModule)
  },
  {
    path: 'projectteam',
    loadChildren: () => import('./projectteam/projectteam.module').then( m => m.ProjectteamPageModule)
  },
  {
    path: 'projectpersonal',
    loadChildren: () => import('./projectpersonal/projectpersonal.module').then( m => m.ProjectpersonalPageModule)
  },
  {
    path: 'extrac',
    loadChildren: () => import('./extrac/extrac.module').then( m => m.ExtracPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
