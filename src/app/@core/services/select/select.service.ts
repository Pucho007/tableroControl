import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndpointService } from '../endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private _httpClient:HttpClient, private _endPointService: EndpointService) { }

  postInfo(indicadorFiltro:any):Observable<any>{
    return this._httpClient.post<any>(`${this._endPointService.SELECT.select}`, indicadorFiltro);
  }

}
