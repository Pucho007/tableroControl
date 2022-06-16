import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './reportes.component';
import { GestionComponent } from '../reportes/gestion/gestion.component';
import { FedComponent } from './fed/fed.component';
import { PprComponent } from './ppr/ppr.component';

const routes: Routes = [
  {
    path:'',
    component:ReportesComponent,
    children:[
      {
        path: 'gestion',
        component:GestionComponent
      },
      {
        path: 'ppr',
        component:PprComponent
      },
      {
        path: 'fed',
        component:FedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
