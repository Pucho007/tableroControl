import { Component, OnInit, OnDestroy } from '@angular/core';
import { IFiltro } from 'src/app/@core/models/IFiltroSelect.interface';
import { IDataTableActionComponent, HIS, IDataIndicador } from '../../../@core/models/IDatatable.interface';
import { DataService } from '../../../@core/services/data.service';
import { IFiltroIndicador, IDataFiltroSelect } from '../../../@core/models/IFiltroSelect.interface';
import { SelectService } from '../../../@core/services/select/select.service';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  

  //variables para obtener los establecimientos
  responseHIS!:HIS[];
  hospitalSeleccionado!:HIS;

  //variables para crear el grafico
  areaChartData!:any;
  areaChartDataSend!:any;
  areaChartOptions!:any;

  //variable para obtener todos los indicadore segun el codigo del indicador global
  filtroIndicador={
    indicador:'G0000'
  }

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

  //variables que guarda los valores de los filtros
  filtroSelectIndicador:IFiltro={
    type:"2",
    title:"Indicador",
    selectedItem:'G0001',
    data:[]
  }

  filtroSelectFecha:IFiltro={
    type:"2",
    title:"Año",
    selectedItem:'2022',
    data:[]
  }
  
  constructor(private chartService:DataService, private selectFiltro:SelectService) { }


  ngOnInit(): void {
    //this.filtrarData(this.filtroSelect.data);
    this.setSelected();
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

  filtrarData(item:IFiltroIndicador):void{
    this.responseHIS=[];
    let dataIndicador:IDataIndicador[];
    let dataIndicadorBEPECA:IDataIndicador[];
    let dataIndicadorBONILLA:IDataIndicador[];
    let dataIndicadorVENTANILLA:IDataIndicador[];
    let filtroSelect : IFiltroIndicador={
      indicador:item.indicador,
      annio:item.annio
    };
    
    this.chartService.getInfo(filtroSelect).subscribe(({result})=>{
      dataIndicador=[... result.data];

      dataIndicadorBEPECA=[... dataIndicador].filter(item => item.Red=='BEPECA');
      dataIndicadorBONILLA=[... dataIndicador].filter(item => item.Red=='BONILLA - LA PUNTA');
      dataIndicadorVENTANILLA=[... dataIndicador].filter(item => item.Red=='VENTANILLA');

      console.log(dataIndicadorBEPECA);
      console.log(dataIndicadorBONILLA);
      console.log(dataIndicadorVENTANILLA);

      //this.hospitalSeleccionado=this.responseHIS.reverse()[0]
      //this.buildGrafico(this.hospitalSeleccionado);
      //this.dataTable.data=this.responseHIS;
    });
  }

  
  private setSelected():void{
    //filtro de indicadores de la BD
    this.selectFiltro.postInfo(this.filtroIndicador).subscribe(({result})=>{
      result.data.forEach((item:any) => 
        this.filtroSelectIndicador.data.push({
          name  : item.nombre_corto_Indicador_Especifico,
          value : item.codigo_Indicador_Especifico,
        })
      );
    });
    
    //filtro de fechas de la BD
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let anioInicio= 2021;
    let fechasFiltro:IDataFiltroSelect[]=[]

    for (let index=anioInicio; anioActual >= index; index++) {
      fechasFiltro.push(
        {
          name:index.toString(),
          value:index.toString()
        }
      )
    }

    this.filtroSelectFecha.data=[... fechasFiltro];

  }

}
