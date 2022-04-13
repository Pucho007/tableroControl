import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { NbCardModule, NbSelectModule, NbButtonModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../@core/commons/commons.module';



@NgModule({
  declarations: [
    GestionComponent
  ],
  imports: [
    CommonModule,
    NbSelectModule,
    NbCardModule,
    CommonsModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule
  ]
})
export class GestionModule { }
