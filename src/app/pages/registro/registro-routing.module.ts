import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
  {
    path:'',
    component:RegistroComponent,
    children:[
      {
        path:'gestion',
        component:GestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
