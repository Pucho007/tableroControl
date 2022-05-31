import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionComponent } from './reportes/gestion/gestion.component';
import { FedComponent } from './reportes/fed/fed.component';
import { FinancieroComponent } from './reportes/financiero/financiero.component';
import { CampanasaludComponent } from './reportes/campanasalud/campanasalud.component';
import { ProduccionComponent } from './reportes/produccion/produccion.component';
import { VphComponent } from './reportes/vph/vph.component';
import { RecursoshumanosComponent } from './reportes/recursoshumanos/recursoshumanos.component';
import { PprComponent } from './reportes/ppr/ppr.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component:DashboardComponent
      },
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
      {
        path:'registro',
        loadChildren: () => import('./registro/registro.module')
          .then(m => m.RegistroModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
//  { path: '', redirectTo: 'pages', pathMatch: 'full' },
//  { path: '**', redirectTo: 'pages' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
