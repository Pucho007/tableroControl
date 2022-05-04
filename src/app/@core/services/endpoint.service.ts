import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  host = environment.host;

  readonly AUTH = {
		login: `${this.host}/${AUTH.LOGIN}`,
		logout: `${this.host}/${AUTH.LOGOUT}`,
	};

	readonly SELECT = {
		select: `${this.host}/select-api`,
		//increase: `${this.host}/noticias/updateviews`,
		//update:`${this.host}/noticias/update`,
	};

	readonly TAGS={
		//tags:`${this.host}/tipoNoticias`,
		//update:`${this.host}/tipoNoticias/update`
	}

	readonly VIDEOS = {
		//videos:`${this.host}/videos`,
		//update:`${this.host}/videos/update`,
	};

	readonly PROGRAMAS = {
		//programas:`${this.host}/programas`,
		//update:`${this.host}/programas/update`,
	};

	readonly GALERIA = {
		//galeria:`${this.host}/galeria`,
		//update:`${this.host}/galeria/update`,
	};

}

export enum AUTH {
	LOGIN= 'authenticate',
	LOGOUT = 'logout'
}