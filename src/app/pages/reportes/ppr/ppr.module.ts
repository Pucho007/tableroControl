import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PprRoutingModule } from './ppr-routing.module';
import { PprComponent } from './ppr.component';
import { PanComponent } from './pan/pan.component';
import { SmnComponent } from './smn/smn.component';
import { TbcComponent } from './tbc/tbc.component';
import { EntComponent } from './ent/ent.component';
import { PccComponent } from './pcc/pcc.component';
import { SmComponent } from './sm/sm.component';


@NgModule({
  declarations: [
    PprComponent,
    PanComponent,
    SmnComponent,
    TbcComponent,
    EntComponent,
    PccComponent,
    SmComponent
  ],
  imports: [
    CommonModule,
    PprRoutingModule
  ]
})
export class PprModule { }
