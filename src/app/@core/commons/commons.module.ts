import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';

import { ChartModule } from 'angular2-chartjs';
import { TableComponent } from './table/table.component';
import { NbButtonModule, NbIconModule, NbCardModule, NbTabsetModule } from '@nebular/theme';

import { NbSelectModule } from '@nebular/theme';
import { FiltroSelectComponent } from './filtro-select/filtro-select.component';

import { NgChartsModule } from 'ng2-charts';
import { CardchartComponent } from './cardchart/cardchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TabsComponent } from './tabs/tabs.component';
import { LeyendaTableComponent } from './leyenda-table/leyenda-table.component';

@NgModule({
  declarations: [
    BarchartComponent,
    TableComponent,
    FiltroSelectComponent,
    CardchartComponent,
    TabsComponent,
    LeyendaTableComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    NgChartsModule,
    NbCardModule,
    NgxChartsModule,
    NbTabsetModule,
  ],
  exports:[
    BarchartComponent,
    TableComponent,
    FiltroSelectComponent,
    CardchartComponent,
    TabsComponent
  ]
})
export class CommonsModule { }
