import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { TableComponent } from './table/table.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { NgChartsModule } from 'ng2-charts';

import { NbSelectModule } from '@nebular/theme';
import { FiltroSelectComponent } from './filtro-select/filtro-select.component';



@NgModule({
  declarations: [
    BarchartComponent,
    TableComponent,
    FiltroSelectComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    NgxChartsModule,
    NbButtonModule,
    NbIconModule,
    NgChartsModule,
    NbSelectModule
  ],
  exports:[
    BarchartComponent,
    TableComponent,
    FiltroSelectComponent
  ]
})
export class CommonsModule { }
