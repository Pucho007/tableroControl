import { Component, OnInit } from '@angular/core';
import { IDataTableActionComponent, HIS } from '../../../@core/models/IDatatable.interface';
import { DataService } from '../../../@core/services/data.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  
  responseHIS:HIS[]=[];
  hospitalSeleccionado!:HIS;

  areaChartData!:any;


  dataTable: IDataTableActionComponent = {
    title: 'Tablas Resumen',
    subtitulo: '',
    headers: [
      'ESTABLECIMIENTO',
      'TOTAL',
      'ENERO',
      'FEBRERO',
      'MARZO',
      'ABRIL',
      'MAYO',
      'JUNIO',
      'JULIO',
      'AGOSTO',
      'SEPTIEMBRE',
      'OCTUBRE',
      'NOVIEMBRE',
      'DICIEMBRE',
    ],
    subheaders:[
      "NOMBRE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
      "META",
      "AVANCE",
      "PORCENTAJE",
    ],
    indexDisable: [0],
    rowBold:1
  };

  
  constructor(private chartService:DataService) { }

  ngOnInit(): void {
    this.responseHIS=[];
    this.chartService.getInfo().subscribe((res)=>{
      this.responseHIS=res;
      this.hospitalSeleccionado=this.responseHIS[0]
      this.buildGrafico(this.hospitalSeleccionado);
      this.dataTable.data=this.responseHIS;
    });
  }

  buildGrafico(responseHIS:HIS){
    this.areaChartData={
      labels:['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE','NOVIEMBRE', 'DICIEMBRE'],
      datasets:[
          {
              label:'Avances',
              data:this.chartService.getArrayAvance(responseHIS),
              backgroundColor:[
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor:[
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth:1,
              order:1
          },
          {
              label:'Metas',
              data:this.chartService.getArrayMeta(responseHIS),
              backgroundColor:[
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor:[
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth:1,
              type:"line",
              order:0
          }
      ]
    }
  }

}
