import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { CommonsModule } from '../../../@core/commons/commons.module';



@NgModule({
  declarations: [
    GestionComponent
  ],
  imports: [
    CommonModule,
    NbSelectModule,
    NbCardModule,
    CommonsModule
  ]
})
export class GestionModule { }
