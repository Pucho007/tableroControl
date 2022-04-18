import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HIS } from '../models/IDatatable.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient:HttpClient) { }

  getInfo(filtro1:string, filtro2:string):Observable<HIS[]>{
    return this._httpClient.get<HIS[]>('http://localhost:4000/his_20');
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
