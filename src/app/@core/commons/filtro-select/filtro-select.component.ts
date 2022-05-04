import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFiltro, IFiltroIndicador } from '../../models/IFiltroSelect.interface';

@Component({
  selector: 'app-filtro-select',
  templateUrl: './filtro-select.component.html',
  styleUrls: ['./filtro-select.component.scss']
})
export class FiltroSelectComponent implements OnInit {

  @Input("filtroSelectIndicador") filtroSelectIndicador!:IFiltro;
  @Input("filtroSelectFecha") filtroSelectFecha!:IFiltro;
  @Output() addActionData:EventEmitter<IFiltroIndicador>=new EventEmitter<IFiltroIndicador>();

  constructor() { }

  ngOnInit(): void {
    
  }

  filtrarData(fecha:string, indicador:string):void{
    let data: IFiltroIndicador={
      annio:fecha,
      indicador:indicador
    }
    this.addActionData.emit(data);
  }

}
