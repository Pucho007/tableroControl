import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PprComponent } from './ppr.component';
import { NbCardModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../@core/commons/commons.module';



@NgModule({
  declarations: [
    PprComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    CommonsModule
  ]
})
export class PprModule { }
