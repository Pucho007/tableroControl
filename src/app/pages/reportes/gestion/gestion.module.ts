import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { NbCardModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../@core/commons/commons.module';
import { TableComponent } from '../../../@core/commons/table/table.component';




@NgModule({
  declarations: [
    GestionComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    CommonsModule
  ]
})
export class GestionModule { }
