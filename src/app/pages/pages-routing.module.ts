import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionComponent } from './reportes/gestion/gestion.component';
import { FedComponent } from './reportes/fed/fed.component';

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
        loadChildren: () => import('./reportes/ppr/ppr.module')
        .then(m => m.PprModule),
      },
      {
        path: 'fed',
        component:FedComponent
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
