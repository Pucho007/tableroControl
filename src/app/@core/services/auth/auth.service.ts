import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../../models/class/login-usuario';
import { IResponseAuth } from '../../models/IAuth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  /*public login(loginUsuario: LoginUsuario): Observable<IResponseAuth> {
    return this._httpClient.post<IResponseAuth>('http://localhost:4000/', loginUsuario);
  }*/

  public login(loginUsuario:LoginUsuario):IResponseAuth{
    let iResponseAuth:IResponseAuth={
      user:{
        id:0,
        contrasenia:"",
        correo:"",
        tipo:""
      },
      message:"",
      token:null
    };

    if(loginUsuario.userName=="user_test@diresa.gob.com" && loginUsuario.password=="DIre$4C4lla0"){
      iResponseAuth={
        user:{
          id:8,
          correo:"user_test@mmm.com",
          contrasenia:"",
          tipo:"USER"
        },
        token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyX3Rlc3RAbW1tLmNvbSIsImV4cCI6MTY1MDUwMDE4MiwiaWF0IjoxNjUwNDY0MTgyfQ.GbqJAR6UKaFNoC2OtvW7w_5GVPxTf6WJ2Opv-cKk-eE",
        message:"Sesión iniciada correctamente"
      }
    }

    return iResponseAuth;
  }
}
