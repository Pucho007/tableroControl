import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-leyenda-table',
  templateUrl: './leyenda-table.component.html',
  styleUrls: ['./leyenda-table.component.scss']
})
export class LeyendaTableComponent implements OnInit, OnChanges {

  @Input("metaIndicador") metaIndicador!:number;

  metaIndicadorLeyenda!:number;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.metaIndicador.currentValue != changes.metaIndicador.previousValue){
      this.metaIndicadorLeyenda=this.metaIndicador;
    }
  }

  ngOnInit(): void {
    this.metaIndicadorLeyenda=this.metaIndicador;
  }

}
