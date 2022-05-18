import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDataTableActionComponent } from '../../models/IDatatable.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataTable!:IDataTableActionComponent;
  @Output() actionShowHospital:EventEmitter<any> = new EventEmitter();

  rowSelected!:boolean;

  metaIndicador:number=0;

  constructor() { }

  ngOnInit(): void {
    this.metaIndicador=this.dataTable.meta!;
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
    //const item_Numero=Number(item.substring(0, item.length - 1));
    const item_Numero=Number(item);
    //console.log(item_Numero);
    if(item_Numero<this.dataTable.meta!*100){
      flagNumero='red';
    }else if(item_Numero<this.dataTable.meta!*100){
      flagNumero='yellow';
    }else{
      flagNumero='green';
    }
    return flagNumero;
  }



}
