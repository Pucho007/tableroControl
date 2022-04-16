import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDataTableActionComponent, HIS } from '../../../@core/models/IDatatable.interface';
import { DataService } from '../../../@core/services/data.service';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  
  responseHIS!:HIS[];
  hospitalSeleccionado!:HIS;

  areaChartData!:any;
  areaChartDataSend!:any;
  areaChartOptions!:any;


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
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
      "M",
      "A",
      "%",
    ],
    indexDisable: [0],
    rowBold:1
  };

  
  constructor(private chartService:DataService) { }


  ngOnInit(): void {
    this.responseHIS=[];
    this.chartService.getInfo().subscribe((res)=>{
      res.forEach((item:any) =>
        this.responseHIS.push({
          codigo: item.cod,
          establecimiento:item["Establecimiento"],
          meta_total:item["META TOTAL"],
          avance_total:item["AVANCE TOTAL"],
          porcentaje_total:item["PORCENTAJE TOTAL"],
          meta_enero:item["META ENERO"],
          avance_enero:item["AVANCE ENERO"],
          porcentaje_enero:item["PORCENTAJE ENERO"],
          meta_febrero:item["META FEBRERO"],
          avance_febrero:item["AVANCE FEBRERO"],
          porcentaje_febrero:item["PORCENTAJE FEBRERO"],
          meta_marzo:item["META MARZO"],
          avance_marzo:item["AVANCE MARZO"],
          porcentaje_marzo:item["PORCENTAJE MARZO"],
          meta_abril:item["META ABRIL"],
          avance_abril:item["AVANCE ABRIL"],
          porcentaje_abril:item["PORCENTAJE ABRIL"],
          meta_mayo:item["META MAYO"],
          avance_mayo:item["AVANCE MAYO"],
          porcentaje_mayo:item["PORCENTAJE MAYO"],
          meta_junio:item["META JUNIO"],
          avance_junio:item["AVANCE JUNIO"],
          porcentaje_junio:item["PORCENTAJE JUNIO"],
          meta_julio:item["META JULIO"],
          avance_julio:item["AVANCE JULIO"],
          porcentaje_julio:item["PORCENTAJE JULIO"],
          meta_agosto:item["META AGOSTO"],
          avance_agosto:item["AVANCE AGOSTO"],
          porcentaje_agosto:item["PORCENTAJE AGOSTO"],
          meta_septiembre:item["META SEPTIEMBRE"],
          avance_septiembre:item["AVANCE SEPTIEMBRE"],
          porcentaje_septiembre:item["PORCENTAJE SEPTIEMBRE"],
          meta_octubre:item["META OCTUBRE"],
          avance_octubre:item["AVANCE OCTUBRE"],
          porcentaje_octubre:item["PORCENTAJE OCTUBRE"],
          meta_noviembre:item["META NOVIEMBRE"],
          avance_noviembre:item["AVANCE NOVIEMBRE"],
          porcentaje_noviembre:item["PORCENTAJE NOVIEMBRE"],
          meta_diciembre:item["META DICIEMBRE"],
          avance_diciembre:item["AVANCE DICIEMBRE"],
          porcentaje_diciembre:item["PORCENTAJE DICIEMBRE"],
        })
      );
      this.hospitalSeleccionado=this.responseHIS.reverse()[0]
      this.buildGrafico(this.hospitalSeleccionado);
      this.dataTable.data=this.responseHIS;
    });
  }

  buildGrafico(responseHIS:HIS){
    
    // informacion del gráfico
    this.areaChartData={
      labels:['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE','NOVIEMBRE', 'DICIEMBRE'],
      datasets:[
          {
              label:'Avances',
              data:this.chartService.getArrayAvance(responseHIS),
              backgroundColor:[
                  'rgba(54, 162, 235, 0.3)',
              ],
              borderColor:[
                  'rgba(54, 162, 235, 1)',

              ],
              hoverBackgroundColor:[
                'rgba(54, 162, 235, 0.4)'
              ],
              hoverBorderColor:[
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth:1,
              order:1
          },
          {
              label:'Metas',
              data:this.chartService.getArrayMeta(responseHIS),
              backgroundColor:[
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor:[
                  'rgba(255, 99, 132, 1)',
              ],
              pointBackgroundColor:[
                'rgba(255, 99, 132, 0.2)',
              ],
              pointBorderColor:[
                'rgba(255, 99, 132, 1)'
              ],
              pointHoverBackgroundColor:[
                'rgba(255, 99, 132, 0.4)',
              ],
              pointHoverBorderColor:[
                'rgba(255, 99, 132, 1)'
              ],
              pointHoverRadius:6,
              pointRadius:4,
              borderWidth:1,
              type:"line",
              order:0
          }
      ]
    }

    // Opciones del gráfico

    this.areaChartOptions=
    {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      maintainAspectRatio:false,
      plugins:{
        datalabels: {
          anchor: 'start',
          align: 'end',
          labels:{
            title: {
              font: {
                weight: 'bold'
              }
            }
          }
        },
        legend:{
          position:'bottom',
          title:{
            display:true,
            text:'Leyenda',
            font:{
              size:14,
              weight:'bold'
            },
            padding:10
          },
          labels:{
            font:{
              size:14
            }
          }
        },
        title:{
          display:true,
          text:responseHIS.establecimiento,
          color:'rgba(0,0,0,1)',
          font:{
            size:20,
            weight:'bold'
          },
          padding:{
            top:25,
            bottom:10
          }
        }
      }
    }

  }


  mostrarGraficaHospital(item:HIS){
    this.buildGrafico(item);
  }



}
