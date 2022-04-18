import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFiltro, IFiltroSelect } from '../../models/IFiltroSelect.interface';

@Component({
  selector: 'app-filtro-select',
  templateUrl: './filtro-select.component.html',
  styleUrls: ['./filtro-select.component.scss']
})
export class FiltroSelectComponent implements OnInit {

  @Input("filtroSelect") filtroSelect!:IFiltro;
  @Output() addActionData:EventEmitter<IFiltroSelect[]>=new EventEmitter<IFiltroSelect[]>();

  constructor() { }

  ngOnInit(): void {
    
  }

  filtrarData(data:IFiltroSelect[]):void{
    this.addActionData.emit(data);
  }

}
