import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public sppiner$=new Subject<boolean>();
  constructor() { }

  isShow():void{this.sppiner$.next(true)};
  isHidden():void{this.sppiner$.next(false)};
}
