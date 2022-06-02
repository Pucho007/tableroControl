import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredComponent } from './cred.component';
import { NbCardModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { CommonsModule } from '../../../../@core/commons/commons.module';



@NgModule({
  declarations: [
    CredComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    CommonsModule
  ]
})
export class CredModule { }
