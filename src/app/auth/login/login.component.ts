import { Component, HostBinding, OnInit } from '@angular/core';
import { TokenService } from '../../@core/services/auth/token.service';
import { AuthService } from '../../@core/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/@core/models/class/login-usuario';
import { NbIconConfig, NbToastrService } from '@nebular/theme';
import { IToast } from 'src/app/@core/models/IToast.interface';

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


  //Troast
  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastrService: NbToastrService
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

    this.authService.login(this.loginUsuario).subscribe(auth => {
      if (auth.result.token !== undefined) {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(auth.result.token);
        this.tokenService.setUserName(auth.result.user.username);
        this.tokenService.setAuthorities([auth.result.user.rol]);
        
        const toast:IToast={
          title:'Inicio de Sesión',
          message:'Bienvenido'+ auth.result.user.username+'',
        }
        this.showToast(toast,false);
        this.router.navigate(['/pages']);
      }else {
        const toast:IToast={
          title:'Error',
          message:'Error al ingresar con la cuenta',
        }
        this.showToast(toast,false);
      }
    }, error => {
      this.isLogged = false;
      this.errMsj = error.error.message;
      const toast:IToast={
        title:'Error',
        message:'Error con el servidor',
      }
      this.showToast(toast,false);
    })
  }

  getConfigValue(value:string){
    return value;
  }


  showToast(toast:IToast,preventDuplicates: boolean) {
    this.toastrService.show(
      toast.message,
      toast.title,
      { preventDuplicates}
      );
  }

}
