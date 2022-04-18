import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { CommonsModule } from 'src/app/@core/commons/commons.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    CommonsModule
  ]
})
export class DashboardModule { }
