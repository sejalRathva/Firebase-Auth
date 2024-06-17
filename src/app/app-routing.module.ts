import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './Auth/authentication/authentication.module';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'

const redirectToLogin = () =>redirectUnauthorizedTo(['/Auth/login']);
const redirectToHome = () =>redirectLoggedInTo(['/home/dashboard']);

const routes: Routes = [
  {
    path: 'Auth',
    loadChildren: () => import('./Auth/authentication/authentication.module').then(() =>  AuthenticationModule),
    ...canActivate(redirectToHome)
  },{
    path: '',
    redirectTo: 'Auth',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(() =>  HomeModule),
    ...canActivate(redirectToLogin)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
