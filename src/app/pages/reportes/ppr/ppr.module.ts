import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PprComponent } from './ppr.component';
import { NbCardModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../@core/commons/commons.module';
import { PprRoutingModule } from './ppr-routing.module';
import { CredModule } from './cred/cred.module';
import { EsrssrModule } from './esrssr/esrssr.module';



@NgModule({
  declarations: [
    PprComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    CommonsModule,
    PprRoutingModule,
    CredModule,
    EsrssrModule
  ]
})
export class PprModule { }
