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

  public login(loginUsuario: LoginUsuario): Observable<IResponseAuth> {
    return this._httpClient.post<IResponseAuth>('http://localhost/php_project/auth', loginUsuario);
  }
}
