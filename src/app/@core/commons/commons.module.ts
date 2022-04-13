import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { TableComponent } from './table/table.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';


@NgModule({
  declarations: [
    BarchartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    NgxChartsModule,
    NbButtonModule,
    NbIconModule
  ],
  exports:[
    BarchartComponent,
    TableComponent
  ]
})
export class CommonsModule { }
