import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { RGestionComponent } from './rgestion/rgestion.component';

const routes: Routes = [
  {
    path:'',
    component:RegistroComponent,
    children:[
      {
        path:'gestion',
        component:RGestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
