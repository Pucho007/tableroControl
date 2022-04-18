import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RGestionComponent } from '../rgestion/rgestion.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    RGestionComponent
  ],
  imports: [
    CommonModule,
    NbCardModule
  ]
})
export class RGestionModule { }
