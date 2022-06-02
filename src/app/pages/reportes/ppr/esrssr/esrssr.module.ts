import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsrssrComponent } from './esrssr.component';
import { NbCardModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../../@core/commons/commons.module';



@NgModule({
  declarations: [
    EsrssrComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    CommonsModule
  ]
})
export class EsrssrModule { }
