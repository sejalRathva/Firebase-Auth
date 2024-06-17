import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
 
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import{MatCardModule}from '@angular/material/card';
import { SidenavComponent } from './sidenav/sidenav.component'; 
import { MatMenuModule } from '@angular/material/menu';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    SidenavComponent,TopNavComponent,
  ],
  imports: [
    CommonModule,LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule, 
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatRippleModule,
    RouterModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatMenuModule,
    MatGridListModule,
  ],exports:[
    MatMenuModule,
    TopNavComponent,
    SidenavComponent,
    CommonModule,LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule, 
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatRippleModule,
    RouterModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatGridListModule
  ]
})
export class SharedModule { }
