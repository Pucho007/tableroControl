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
	};

	readonly INDICADOR={
		indicador:`${this.host}/indicador-api`,
		//update:`${this.host}/tipoNoticias/update`
	}

	readonly FILTRO = {
		filtro:`${this.host}/indicador-api-filtro`,
		//update:`${this.host}/videos/update`,
	};

	readonly METAGESTION = {
		meta:`${this.host}/indicador-api-meta-gestion`,
		//update:`${this.host}/programas/update`,
	};

	readonly METAOTROS = {
		meta:`${this.host}/indicador-api-meta-otros`,
		//update:`${this.host}/programas/update`,
	};

	readonly NOMBREFILTRO = {
		nombre:`${this.host}/indicador-nombre-filtro`,
		//update:`${this.host}/galeria/update`,
	};

}

export enum AUTH {
	LOGIN= 'authenticate',
	LOGOUT = 'logout'
}