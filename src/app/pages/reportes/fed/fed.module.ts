import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../@core/commons/commons.module';
import { TableComponent } from '../../../@core/commons/table/table.component';
import { FedComponent } from './fed.component';


@NgModule({
  declarations: [
    FedComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    CommonsModule
  ]
})
export class FedModule { }
