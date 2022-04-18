import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './reportes.component';
import { GestionComponent } from '../reportes/gestion/gestion.component';
import { FedComponent } from './fed/fed.component';
import { CampanasaludComponent } from './campanasalud/campanasalud.component';
import { FinancieroComponent } from './financiero/financiero.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { VphComponent } from './vph/vph.component';
import { RecursoshumanosComponent } from './recursoshumanos/recursoshumanos.component';

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
        loadChildren: () => import('./ppr/ppr.module')
          .then(m => m.PprModule),
      },
      {
        path: 'fed',
        component:FedComponent
      },
      {
        path: 'financiero',
        component:FinancieroComponent

      },
      {
        path: 'campana-salud',
        component:CampanasaludComponent
      },
      {
        path: 'produccion',
        component:ProduccionComponent
      },
      {
        path: 'vph',
        component:VphComponent
      },
      {
        path: 'recursos-humanos',
        component:RecursoshumanosComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
