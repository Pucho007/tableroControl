import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { NbCardModule, NbSelectModule, NbButtonModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../@core/commons/commons.module';
import { TableComponent } from '../../../@core/commons/table/table.component';
import { BarchartComponent } from '../../../@core/commons/barchart/barchart.component';
import { FiltroSelectComponent } from '../../../@core/commons/filtro-select/filtro-select.component';



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
