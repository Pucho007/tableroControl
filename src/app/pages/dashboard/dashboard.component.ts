import { Component, OnInit } from '@angular/core';
import { DataService } from '../../@core/services/data.service';
import { IFiltro, IFiltroSelect } from '../../@core/models/IFiltroSelect.interface';
import { HIS } from '../../@core/models/IDatatable.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  responseHIS!:HIS[];
  hospitalSeleccionado!:HIS;

  areaChartData!:any;
  areaChartDataSend!:any;
  areaChartOptions!:any;
  
  filtroSelect:IFiltro={
    type:"2",
    data:[
      {
        title:'Indicador',
        data:[
          {
            name:'indicador 1',
            value:'1'
          },
          {
            name:'indicador 2',
            value:'2'
          },
          {
            name:'indicador 3',
            value:'3'
          },
        ],
        selectedItem:'1'
      },
      {
        title:'Año',
        data:[
          {
            name:'2022',
            value:'2022'
          },
          {
            name:'2021',
            value:'2021'
          },
          {
            name:'2020',
            value:'2020'
          },
        ],
        selectedItem:'2022'
      },
    ]
  }

  constructor(private chartService:DataService) { }

  ngOnInit(): void {
    this.filtrarData(this.filtroSelect.data);
  }


  filtrarData(item:IFiltroSelect[]):void{
    this.responseHIS=[];
    this.chartService.getInfo(item[0].selectedItem,item[1].selectedItem).subscribe((res)=>{
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
}
