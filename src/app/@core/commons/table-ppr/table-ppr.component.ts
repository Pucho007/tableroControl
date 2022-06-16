import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDataTableActionComponent } from '../../models/IDatatable.interface';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-table-ppr',
  templateUrl: './table-ppr.component.html',
  styleUrls: ['./table-ppr.component.scss']
})
export class TablePprComponent implements OnInit {
  @Input() dataTable!:IDataTableActionComponent;
  @Output() actionShowHospital:EventEmitter<any> = new EventEmitter();

  rowSelected!:boolean;

  metaIndicador:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  originalOrder = (_a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
		return 0;
	};


  selectedRowHospital(data:any){
    this.actionShowHospital.emit(data);
  }


  isPorcentaje(porcentaje:string | number ):boolean{
    let flagPorcentaje=false;
    if(typeof porcentaje === 'number'){
      flagPorcentaje=false;
    }else if(porcentaje.includes("%")){
      flagPorcentaje=true;
    }
    return flagPorcentaje;
  }

  isColor(item:string):string{
    let flagNumero='';
    if(!Array.isArray(item)){
      const item_Numero=Number(item.substring(0, item.length - 1));
      if(item_Numero<100){
        flagNumero='red';
      }else{
        flagNumero='green';
      }
    }
    return flagNumero;
  }


  checkArray(item:any){

    return Array.isArray(item);
  }

  donwloadTabla(){
    
  }




}
