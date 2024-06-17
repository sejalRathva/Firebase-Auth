import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SharedModule } from 'src/shared/shared/shared.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
