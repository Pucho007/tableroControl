import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PprComponent } from './ppr.component';
import { EntComponent } from './ent/ent.component';
import { PanComponent } from './pan/pan.component';
import { PccComponent } from './pcc/pcc.component';
import { SmComponent } from './sm/sm.component';
import { SmnComponent } from './smn/smn.component';
import { TbcComponent } from './tbc/tbc.component';

const routes: Routes = [
  {
    path:'',
    component:PprComponent,
    children:
    [
      {
        path:'enfermedades-no-transmisibles',
        component:EntComponent
      },
      {
        path:'programa-articulado-nutricional',
        component:PanComponent
      },
      {
        path:'prevencion-control-cancer',
        component:PccComponent
      },
      {
        path:'salud-mental',
        component:SmComponent
      },
      {
        path:'salud-materno-neonatal',
        component:SmnComponent
      },
      {
        path:'tbc',
        component:TbcComponent
      },
      {
        path:'',
        redirectTo:'enfermedades-no-transmisibles',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PprRoutingModule { }
