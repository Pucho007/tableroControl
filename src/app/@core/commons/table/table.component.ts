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

  constructor() { }

  ngOnInit(): void {

  }

  originalOrder = (_a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
		return 0;
	};


  selectedRowHospital(data:any){
    this.actionShowHospital.emit(data);
  }


}