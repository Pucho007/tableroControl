import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDataTableActionComponent } from '../../models/IDatatable.interface';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-table-fed',
  templateUrl: './table-fed.component.html',
  styleUrls: ['./table-fed.component.scss']
})
export class TableFedComponent implements OnInit {

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
    //const item_Numero=Number(item.substring(0, item.length - 1));
    const item_Numero=Number(item[0]);
    const item_Numero3=Number(item[2]);
    //console.log(item_Numero);
    if(item_Numero<item_Numero3){
      flagNumero='red';
    }else{
      flagNumero='green';
    }
    return flagNumero;
  }


  checkArray(item:any){
    return Array.isArray(item);
  }

  donwloadTabla(){
    
  }

}
