import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    NbCardModule
  ]
})
export class AuthModule { }
