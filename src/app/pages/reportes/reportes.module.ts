import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { NbIconModule, NbTabsetModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    NbIconModule,
    NbTabsetModule,
    NbCardModule
  ],
})
export class ReportesModule { }
