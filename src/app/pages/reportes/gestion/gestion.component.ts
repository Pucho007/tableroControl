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


  //variables para las redes


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

      this.responseHIS.push (this.obtenerDataTotal(dataIndicador));
      this.responseHIS.push (this.obtenerDataTable(dataIndicadorBEPECA));
      this.responseHIS.push (this.obtenerDataTable(dataIndicadorBONILLA));
      this.responseHIS.push (this.obtenerDataTable(dataIndicadorVENTANILLA));


      this.hospitalSeleccionado=this.responseHIS[0];
      this.buildGrafico(this.hospitalSeleccionado);
      this.dataTable.data=this.responseHIS;
      this.dataTable.meta=Number(dataIndicador[0].meta_Indicador_Especifico);
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


  private obtenerDataTable(dataRed:IDataIndicador[]):HIS{
    
    let codigo_establecimiento='000000';

    let establecimiento=dataRed[0].Red;
    let avance_total=dataRed.map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_total=dataRed.map(item => item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_enero=dataRed.filter((item)=> item.mes=='1').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_enero=dataRed.filter((item)=> item.mes=='1').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_febrero=dataRed.filter((item)=> item.mes=='2').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_febrero=dataRed.filter((item)=> item.mes=='2').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_marzo=dataRed.filter((item)=> item.mes=='3').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_marzo=dataRed.filter((item)=> item.mes=='3').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_abril=dataRed.filter((item)=> item.mes=='4').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_abril=dataRed.filter((item)=> item.mes=='4').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_mayo=dataRed.filter((item)=> item.mes=='5').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_mayo=dataRed.filter((item)=> item.mes=='5').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_junio=dataRed.filter((item)=> item.mes=='6').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_junio=dataRed.filter((item)=> item.mes=='6').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_julio=dataRed.filter((item)=> item.mes=='7').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_julio=dataRed.filter((item)=> item.mes=='7').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_agosto=dataRed.filter((item)=> item.mes=='8').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_agosto=dataRed.filter((item)=> item.mes=='8').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_septiembre=dataRed.filter((item)=> item.mes=='9').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_septiembre=dataRed.filter((item)=> item.mes=='9').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_octubre=dataRed.filter((item)=> item.mes=='10').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_octubre=dataRed.filter((item)=> item.mes=='10').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_noviembre=dataRed.filter((item)=> item.mes=='11').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_noviembre=dataRed.filter((item)=> item.mes=='11').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_diciembre=dataRed.filter((item)=> item.mes=='12').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_diciembre=dataRed.filter((item)=> item.mes=='12').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);


    let porcentaje_total      = meta_total != 0 ?      ((avance_total/meta_total)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_enero      = meta_enero != 0 ?      ((avance_enero/meta_enero)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_febrero    = meta_febrero != 0 ?    ((avance_febrero/meta_febrero)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_marzo      = meta_marzo != 0 ?      ((avance_marzo/meta_marzo)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_abril      = meta_abril != 0 ?      ((avance_abril/meta_abril)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_mayo       = meta_mayo != 0 ?       ((avance_mayo/meta_mayo)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_junio      = meta_junio != 0 ?      ((avance_junio/meta_junio)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_julio      = meta_julio != 0 ?      ((avance_julio/meta_julio)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_agosto     = meta_agosto != 0 ?     ((avance_agosto/meta_agosto)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_septiembre = meta_septiembre != 0 ? ((avance_septiembre/meta_septiembre)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_octubre    = meta_octubre != 0 ?    ((avance_octubre/meta_octubre)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_noviembre  = meta_noviembre != 0 ?  ((avance_noviembre/meta_noviembre)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_diciembre  = meta_diciembre != 0 ?  ((avance_diciembre/meta_diciembre)*100).toFixed(2).toString()+"%" : '0.0%';

    let establecimientoRed:HIS={
      codigo_establecimiento:codigo_establecimiento,
      establecimiento:establecimiento,
      avance_total:avance_total,
      meta_total:meta_total,
      porcentaje_total:porcentaje_total,
      avance_enero: avance_enero,
      meta_enero:meta_enero,
      porcentaje_enero:porcentaje_enero,
      avance_febrero: avance_febrero,
      meta_febrero:meta_febrero,
      porcentaje_febrero:porcentaje_febrero,
      avance_marzo: avance_marzo,
      meta_marzo: meta_marzo,
      porcentaje_marzo:porcentaje_marzo,
      avance_abril: avance_abril,
      meta_abril:meta_abril,
      porcentaje_abril:porcentaje_abril,
      avance_mayo: avance_mayo,
      meta_mayo:meta_mayo,
      porcentaje_mayo:porcentaje_mayo,
      avance_junio: avance_junio,
      meta_junio: meta_junio,
      porcentaje_junio:porcentaje_junio,
      avance_julio: avance_julio,
      meta_julio: meta_julio,
      porcentaje_julio:porcentaje_julio,
      avance_agosto: avance_agosto,
      meta_agosto: meta_agosto,
      porcentaje_agosto:porcentaje_agosto,
      avance_septiembre: avance_septiembre,
      meta_septiembre: meta_septiembre,
      porcentaje_septiembre:porcentaje_septiembre,
      avance_octubre: avance_octubre,
      meta_octubre: meta_octubre,
      porcentaje_octubre:porcentaje_octubre,
      avance_noviembre: avance_noviembre,
      meta_noviembre: meta_noviembre,
      porcentaje_noviembre:porcentaje_noviembre,
      avance_diciembre:avance_diciembre,
      meta_diciembre:meta_diciembre,
      porcentaje_diciembre:porcentaje_diciembre
    }

    return establecimientoRed;

  }

  private obtenerDataTotal(dataRed:IDataIndicador[]):HIS{
    let codigo_establecimiento='000000';

    let establecimiento='DIRESA CALLAO';
    let avance_total=dataRed.map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_total=dataRed.map(item => item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_enero=dataRed.filter((item)=> item.mes=='1').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_enero=dataRed.filter((item)=> item.mes=='1').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_febrero=dataRed.filter((item)=> item.mes=='2').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_febrero=dataRed.filter((item)=> item.mes=='2').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_marzo=dataRed.filter((item)=> item.mes=='3').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_marzo=dataRed.filter((item)=> item.mes=='3').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_abril=dataRed.filter((item)=> item.mes=='4').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_abril=dataRed.filter((item)=> item.mes=='4').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_mayo=dataRed.filter((item)=> item.mes=='5').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_mayo=dataRed.filter((item)=> item.mes=='5').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_junio=dataRed.filter((item)=> item.mes=='6').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_junio=dataRed.filter((item)=> item.mes=='6').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_julio=dataRed.filter((item)=> item.mes=='7').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_julio=dataRed.filter((item)=> item.mes=='7').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_agosto=dataRed.filter((item)=> item.mes=='8').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_agosto=dataRed.filter((item)=> item.mes=='8').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_septiembre=dataRed.filter((item)=> item.mes=='9').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_septiembre=dataRed.filter((item)=> item.mes=='9').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_octubre=dataRed.filter((item)=> item.mes=='10').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_octubre=dataRed.filter((item)=> item.mes=='10').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_noviembre=dataRed.filter((item)=> item.mes=='11').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_noviembre=dataRed.filter((item)=> item.mes=='11').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_diciembre=dataRed.filter((item)=> item.mes=='12').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let meta_diciembre=dataRed.filter((item)=> item.mes=='12').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);


    let porcentaje_total      = meta_total != 0 ?      ((avance_total/meta_total)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_enero      = meta_enero != 0 ?      ((avance_enero/meta_enero)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_febrero    = meta_febrero != 0 ?    ((avance_febrero/meta_febrero)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_marzo      = meta_marzo != 0 ?      ((avance_marzo/meta_marzo)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_abril      = meta_abril != 0 ?      ((avance_abril/meta_abril)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_mayo       = meta_mayo != 0 ?       ((avance_mayo/meta_mayo)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_junio      = meta_junio != 0 ?      ((avance_junio/meta_junio)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_julio      = meta_julio != 0 ?      ((avance_julio/meta_julio)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_agosto     = meta_agosto != 0 ?     ((avance_agosto/meta_agosto)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_septiembre = meta_septiembre != 0 ? ((avance_septiembre/meta_septiembre)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_octubre    = meta_octubre != 0 ?    ((avance_octubre/meta_octubre)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_noviembre  = meta_noviembre != 0 ?  ((avance_noviembre/meta_noviembre)*100).toFixed(2).toString()+"%" : '0.0%';
    let porcentaje_diciembre  = meta_diciembre != 0 ?  ((avance_diciembre/meta_diciembre)*100).toFixed(2).toString()+"%" : '0.0%';

    let establecimientoRed:HIS={
      codigo_establecimiento:codigo_establecimiento,
      establecimiento:establecimiento,
      avance_total:avance_total,
      meta_total:meta_total,
      porcentaje_total:porcentaje_total,
      avance_enero: avance_enero,
      meta_enero:meta_enero,
      porcentaje_enero:porcentaje_enero,
      avance_febrero: avance_febrero,
      meta_febrero:meta_febrero,
      porcentaje_febrero:porcentaje_febrero,
      avance_marzo: avance_marzo,
      meta_marzo: meta_marzo,
      porcentaje_marzo:porcentaje_marzo,
      avance_abril: avance_abril,
      meta_abril:meta_abril,
      porcentaje_abril:porcentaje_abril,
      avance_mayo: avance_mayo,
      meta_mayo:meta_mayo,
      porcentaje_mayo:porcentaje_mayo,
      avance_junio: avance_junio,
      meta_junio: meta_junio,
      porcentaje_junio:porcentaje_junio,
      avance_julio: avance_julio,
      meta_julio: meta_julio,
      porcentaje_julio:porcentaje_julio,
      avance_agosto: avance_agosto,
      meta_agosto: meta_agosto,
      porcentaje_agosto:porcentaje_agosto,
      avance_septiembre: avance_septiembre,
      meta_septiembre: meta_septiembre,
      porcentaje_septiembre:porcentaje_septiembre,
      avance_octubre: avance_octubre,
      meta_octubre: meta_octubre,
      porcentaje_octubre:porcentaje_octubre,
      avance_noviembre: avance_noviembre,
      meta_noviembre: meta_noviembre,
      porcentaje_noviembre:porcentaje_noviembre,
      avance_diciembre:avance_diciembre,
      meta_diciembre:meta_diciembre,
      porcentaje_diciembre:porcentaje_diciembre
    }

    return establecimientoRed;

  }


}
