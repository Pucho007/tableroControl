import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HIS, IResponseIndicador } from '../models/IDatatable.interface';
import { IFiltroIndicador, IFiltroIndicadorRed } from '../models/IFiltroSelect.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient:HttpClient) { }

  getInfo(filtroSelect:IFiltroIndicador):Observable<IResponseIndicador>{
    return this._httpClient.post<IResponseIndicador>('http://localhost/php_project/indicador-api', filtroSelect);
  }

  getInfoRed(filtroSelectRed:IFiltroIndicadorRed):Observable<IResponseIndicador>{
    return this._httpClient.post<IResponseIndicador>('http://localhost/php_project/indicador-api-filtro', filtroSelectRed);
  }

  getArrayMeta(hospital:HIS){
    const arrayMeta=[];
    arrayMeta.push(hospital.meta_enero);
    arrayMeta.push(hospital.meta_febrero);
    arrayMeta.push(hospital.meta_marzo);
    arrayMeta.push(hospital.meta_abril);
    arrayMeta.push(hospital.meta_mayo);
    arrayMeta.push(hospital.meta_junio);
    arrayMeta.push(hospital.meta_julio);
    arrayMeta.push(hospital.meta_agosto);
    arrayMeta.push(hospital.meta_septiembre);
    arrayMeta.push(hospital.meta_octubre);
    arrayMeta.push(hospital.meta_noviembre);
    arrayMeta.push(hospital.meta_diciembre);
    return arrayMeta;
  }

  getArrayAvance(hospital:HIS){
    const arrayAvance=[];
    arrayAvance.push(hospital.avance_enero);
    arrayAvance.push(hospital.avance_febrero);
    arrayAvance.push(hospital.avance_marzo);
    arrayAvance.push(hospital.avance_abril);
    arrayAvance.push(hospital.avance_mayo);
    arrayAvance.push(hospital.avance_junio);
    arrayAvance.push(hospital.avance_julio);
    arrayAvance.push(hospital.avance_agosto);
    arrayAvance.push(hospital.avance_septiembre);
    arrayAvance.push(hospital.avance_octubre);
    arrayAvance.push(hospital.avance_noviembre);
    arrayAvance.push(hospital.avance_diciembre);
    return arrayAvance;
  }
}
