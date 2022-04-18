import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { GestionModule } from './reportes/gestion/gestion.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbMenuModule,
    ThemeModule,
    GestionModule,
    DashboardModule
  ],
})
export class PagesModule { }
