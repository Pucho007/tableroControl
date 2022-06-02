import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HIS, IResponseIndicador } from '../models/IDatatable.interface';
import { IFiltroIndicador, IFiltroIndicadorRed } from '../models/IFiltroSelect.interface';
import { IResponseIndicadorNombre, INombreInterface, ICodigoIndicador } from '../models/IIndicador.inteface';
import { IResponseIndicadorMeta } from '../models/IMeta.interface';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient:HttpClient, private _endPointService: EndpointService) { }

  getInfo(filtroSelect:IFiltroIndicador):Observable<IResponseIndicador>{
    return this._httpClient.post<IResponseIndicador>(`${this._endPointService.INDICADOR.indicador}`, filtroSelect);
  }

  getInfoRed(filtroSelectRed:IFiltroIndicadorRed):Observable<IResponseIndicador>{
    return this._httpClient.post<IResponseIndicador>(`${this._endPointService.FILTRO.filtro}`, filtroSelectRed);
  }

  getInfoMeta(filtroSelect:IFiltroIndicador):Observable<IResponseIndicadorMeta>{
    return this._httpClient.post<IResponseIndicadorMeta>(`${this._endPointService.METAGESTION.meta}`, filtroSelect);
  }

  getInfoIndicadorNombre(nombreInterface:ICodigoIndicador):Observable<IResponseIndicadorNombre>{
    return this._httpClient.post<IResponseIndicadorNombre>(`${this._endPointService.NOMBREFILTRO.nombre}`, nombreInterface);
  }

  getArrayMeta(hospital:HIS){
    const arrayMeta=[];
    arrayMeta.push(hospital.meta_enero![0]);
    arrayMeta.push(hospital.meta_febrero![0]);
    arrayMeta.push(hospital.meta_marzo![0]);
    arrayMeta.push(hospital.meta_abril![0]);
    arrayMeta.push(hospital.meta_mayo![0]);
    arrayMeta.push(hospital.meta_junio![0]);
    arrayMeta.push(hospital.meta_julio![0]);
    arrayMeta.push(hospital.meta_agosto![0]);
    arrayMeta.push(hospital.meta_septiembre![0]);
    arrayMeta.push(hospital.meta_octubre![0]);
    arrayMeta.push(hospital.meta_noviembre![0]);
    arrayMeta.push(hospital.meta_diciembre![0]);
    return arrayMeta;
  }

  getArrayAvance(hospital:HIS){
    const arrayAvance=[];
    arrayAvance.push(hospital.avance_enero![0]);
    arrayAvance.push(hospital.avance_febrero![0]);
    arrayAvance.push(hospital.avance_marzo![0]);
    arrayAvance.push(hospital.avance_abril![0]);
    arrayAvance.push(hospital.avance_mayo![0]);
    arrayAvance.push(hospital.avance_junio![0]);
    arrayAvance.push(hospital.avance_julio![0]);
    arrayAvance.push(hospital.avance_agosto![0]);
    arrayAvance.push(hospital.avance_septiembre![0]);
    arrayAvance.push(hospital.avance_octubre![0]);
    arrayAvance.push(hospital.avance_noviembre![0]);
    arrayAvance.push(hospital.avance_diciembre![0]);
    return arrayAvance;
  }
}
