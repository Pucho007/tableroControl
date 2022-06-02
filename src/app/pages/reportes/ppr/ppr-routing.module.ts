import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PprComponent } from './ppr.component';
import { CredComponent } from './cred/cred.component';
import { EsrssrComponent } from './esrssr/esrssr.component';


const routes: Routes = [
  {
    path:'',
    component:PprComponent,
    children:[
      {
        path: 'cred',
        component:CredComponent
      },
      {
        path: 'esrssr',
        component:EsrssrComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PprRoutingModule { }
