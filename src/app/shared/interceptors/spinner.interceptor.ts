import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';



@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{

    private inCola:number=0;

    constructor(private spinnerService:SpinnerService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showSpinner()
        return next.handle(req).pipe(
            finalize(()=>this.hiddenSppiner())
        )
    }

    showSpinner(){
        if (!this.inCola) {
			this.spinnerService.isShow();
		}
        this.inCola++;
        this.spinnerService.isShow();
    }

    hiddenSppiner(){

        this.inCola--;
		if (!this.inCola) {
            this.spinnerService.isHidden();
		}
    }
}