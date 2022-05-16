import { Component, Input, OnInit } from '@angular/core';
import { ITabs } from '../../models/ITabs.interface';
import { IDataTableActionComponent } from '../../models/IDatatable.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {


  @Input() tabsFiltro!:ITabs[];


  //variable que guarda valores de la tabla
  dataTable: IDataTableActionComponent = {
    title: 'Tablas Resumen',
    subtitulo: '',
    headers: [
      'ESTABLECIMIENTO',
      'TOTAL',
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    subheaders:[
      "Nombre",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
      "A",
      "M",
      "%",
    ],
    indexDisable: [0,1],
    rowBold:2
  };
  

  constructor() { 
    this.dataTable.data=this.tabsFiltro.filter(item =>item.id='01')[0].data;
  }

  ngOnInit(): void {
  }

}
