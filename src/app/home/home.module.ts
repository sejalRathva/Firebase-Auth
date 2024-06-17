import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/shared/shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,HomeRoutingModule,SharedModule
  ]
})
export class HomeModule { }
