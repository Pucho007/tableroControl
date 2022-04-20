import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/@core/models/IUser.interface';
import { TokenService } from '../../@core/services/auth/token.service';
import { AuthService } from '../../@core/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/@core/models/class/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  username!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }


  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.username, this.password);
    const auth=this.authService.login(this.loginUsuario);
    try {
      if (auth.token !== null) {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(auth.token);
        this.tokenService.setUserName(auth.user.correo);
        this.tokenService.setAuthorities([auth.user.tipo]);
        this.router.navigate(['/pages']);
      }
    } catch (error) {
      this.isLogged = false;
      //this.errMsj = error;
      /*this.toastr.error(this.errMsj, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });*/
      //console.log(error);
    }
  }

    /*this.authService.login(this.loginUsuario).subscribe(auth => {
      if (auth.token !== null) {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(auth.token);
        this.tokenService.setUserName(auth.user.correo);
        this.tokenService.setAuthorities([auth.user.tipo]);
        this.toastr.success(`BIENVENIDO`, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/pages']);
      }else {
        this.toastr.error(auth.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    }, error => {
      this.isLogged = false;
      this.errMsj = error.error.message;
      this.toastr.error(this.errMsj, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });
      console.log(error.error.message);

    })
  }*/

  getConfigValue(value:string){
    return value;
  }

}
