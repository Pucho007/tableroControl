import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { TableComponent } from './table/table.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { NgChartsModule } from 'ng2-charts';


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
    NbIconModule,
    NgChartsModule
  ],
  exports:[
    BarchartComponent,
    TableComponent
  ]
})
export class CommonsModule { }
