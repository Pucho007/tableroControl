import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';

import { ChartModule } from 'angular2-chartjs';
import { TableComponent } from './table/table.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { NbSelectModule } from '@nebular/theme';
import { FiltroSelectComponent } from './filtro-select/filtro-select.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarchartComponent,
    TableComponent,
    FiltroSelectComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    NgChartsModule
  ],
  exports:[
    BarchartComponent,
    TableComponent,
    FiltroSelectComponent
  ]
})
export class CommonsModule { }
