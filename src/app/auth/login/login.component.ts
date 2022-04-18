import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/@core/models/IUser.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:IAccount={
    email:'',
    password:''
  }


  constructor() { }

  ngOnInit(): void {
  }


  login():void{
    console.log('Bienvenido')
  }

  getConfigValue(value:string){
    return value;
  }

}
