import { Component, OnInit } from '@angular/core';
import { DataService } from '../../@core/services/data.service';
import { IDataFiltroSelect, IFiltro, IFiltroIndicador } from '../../@core/models/IFiltroSelect.interface';
import { HIS, IDataIndicador } from '../../@core/models/IDatatable.interface';
import { ICodigoIndicador } from '../../@core/models/IIndicador.inteface';
import { IMetaIndicador } from '../../@core/models/IMeta.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    
  
  //variables para obtener los establecimientos
  responseHIS!:HIS[];
  hospitalSeleccionado!:HIS;


  //variables para las redes


  //variables para crear el grafico
  areaChartData!:any;
  areaChartDataSend!:any;
  areaChartOptions!:any;


  //VARIABLE PARA GUARDAR LA INFORMACION QUE VIENE DEL API
  dataIndicador!:IDataIndicador[];

  //VARIABLE PARA GUARDAR LA META DEL INDICADOR
  dataMetaIndicador!:IMetaIndicador[];


  //filtro por defecto
  filtroSelect:IFiltroIndicador={
    indicador:'G0001',
    annio:'2022'
  }

  //VARIABLE PARA GUARDAR EL NOMBRE LARGO DEL INDICADOR

  codigo:ICodigoIndicador={
    indicador:''
  };

  nombre_largo_indicador:string='';

  constructor(private chartService:DataService){}

  ngOnInit(): void {
     this.filtrarData(this.filtroSelect);
  }


  filtrarData(item:IFiltroIndicador):void{
    this.filtroSelect={
      indicador:item.indicador,
      annio:item.annio
    };

    this.codigo={
      indicador: this.filtroSelect.indicador
    }

    //obtener la meta del indicador
    this.chartService.getInfoMeta(this.filtroSelect).subscribe(({result})=>{
      try {
        this.dataMetaIndicador= [... result.data];
      } catch (error) {
        this.dataIndicador!=undefined;
      }
    });

    //Obtener la infomracion de cada establecimiento
    this.chartService.getInfo(this.filtroSelect).subscribe(({result})=>{
      try {
        this.dataIndicador=[... result.data];
      } catch (error) {
        this.dataIndicador!=undefined;
      }
      this.obtenerDataResumen();
    });


  }

  obtenerDataResumen(){

    this.responseHIS=[];
    let dataIndicadorBEPECA:IDataIndicador[];
    let dataIndicadorBONILLA:IDataIndicador[];
    let dataIndicadorVENTANILLA:IDataIndicador[];
    let dataIndicadorOTROS:IDataIndicador[];

    dataIndicadorBEPECA=[... this.dataIndicador].filter(item => item.Red=='BEPECA');
    dataIndicadorBONILLA=[... this.dataIndicador].filter(item => item.Red=='BONILLA - LA PUNTA');
    dataIndicadorVENTANILLA=[... this.dataIndicador].filter(item => item.Red=='VENTANILLA');
    dataIndicadorOTROS=[... this.dataIndicador].filter(item => item.Red=='NO PERTENECE A NINGUNA RED');

    this.responseHIS.push (this.obtenerDataTabla(this.dataIndicador, 'DIRESA CALLAO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorBEPECA, 'RED BEPECA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorBONILLA, 'RED BONILLA - LA PUNTA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorVENTANILLA, 'RED VENTANILLA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorOTROS, 'RED OTROS'));
    
    this.hospitalSeleccionado=this.responseHIS[0];
    this.buildGrafico(this.hospitalSeleccionado);
  }

  private obtenerDataTabla(dataRed:IDataIndicador[], establecimiento_tabla:string):HIS{
    
   
    let codigo_establecimiento='000000';

    let establecimiento=establecimiento_tabla;

    let numerador_total=dataRed.map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_total=dataRed.map(item => item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_total= denominador_total != 0 ? Number(((numerador_total/denominador_total)*100).toFixed(2)): 0.0;
    let meta_total=Number(this.dataMetaIndicador[0].meta)* 100;

    let numerador_enero=dataRed.filter((item)=> item.mes=='1').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_enero=dataRed.filter((item)=> item.mes=='1').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_enero= denominador_enero != 0 ? Number(((numerador_enero/denominador_enero)*100).toFixed(2)): 0.0;
    let meta_enero=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_febrero=dataRed.filter((item)=> item.mes=='2').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_febrero=dataRed.filter((item)=> item.mes=='2').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_febrero= denominador_febrero != 0 ? Number(((numerador_febrero/denominador_febrero)*100).toFixed(2)): 0.0;
    let meta_febrero=Number(this.dataMetaIndicador[0].meta)*100;
    
    let numerador_marzo=dataRed.filter((item)=> item.mes=='3').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_marzo=dataRed.filter((item)=> item.mes=='3').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_marzo=denominador_marzo != 0 ? Number(((numerador_marzo/denominador_marzo)*100).toFixed(2)): 0.0;
    let meta_marzo=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_abril=dataRed.filter((item)=> item.mes=='4').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_abril=dataRed.filter((item)=> item.mes=='4').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_abril=denominador_abril != 0 ? Number(((numerador_abril/denominador_abril)*100).toFixed(2)): 0.0;
    let meta_abril=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_mayo=dataRed.filter((item)=> item.mes=='5').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_mayo=dataRed.filter((item)=> item.mes=='5').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_mayo= denominador_mayo != 0 ? Number(((numerador_mayo/denominador_mayo)*100).toFixed(2)) : 0.0;
    let meta_mayo=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_junio=dataRed.filter((item)=> item.mes=='6').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_junio=dataRed.filter((item)=> item.mes=='6').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_junio= denominador_junio != 0 ? Number(((numerador_junio/denominador_junio)*100).toFixed(2)) : 0.0;
    let meta_junio=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_julio=dataRed.filter((item)=> item.mes=='7').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_julio=dataRed.filter((item)=> item.mes=='7').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_julio= denominador_julio != 0 ? Number(((numerador_julio/denominador_julio)*100).toFixed(2)) : 0.0;
    let meta_julio=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_agosto=dataRed.filter((item)=> item.mes=='8').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_agosto=dataRed.filter((item)=> item.mes=='8').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_agosto= denominador_agosto != 0 ? Number(((numerador_agosto/denominador_agosto)*100).toFixed(2)): 0.0;
    let meta_agosto=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_septiembre=dataRed.filter((item)=> item.mes=='9').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_septiembre=dataRed.filter((item)=> item.mes=='9').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_septiembre= denominador_septiembre != 0 ? Number(((numerador_septiembre/denominador_septiembre)*100).toFixed(2)) : 0.0;
    let meta_septiembre=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_octubre=dataRed.filter((item)=> item.mes=='10').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_octubre=dataRed.filter((item)=> item.mes=='10').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_octubre= denominador_octubre != 0 ? Number(((numerador_octubre/denominador_octubre)*100).toFixed(2)): 0.0;
    let meta_octubre=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_noviembre=dataRed.filter((item)=> item.mes=='11').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_noviembre=dataRed.filter((item)=> item.mes=='11').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_noviembre= denominador_noviembre != 0 ? Number(((numerador_noviembre/denominador_noviembre)*100).toFixed(2)): 0.0;
    let meta_noviembre=Number(this.dataMetaIndicador[0].meta)*100;

    let numerador_diciembre=dataRed.filter((item)=> item.mes=='12').map(item => item.numerador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let denominador_diciembre=dataRed.filter((item)=> item.mes=='12').map(item=> item.denominador).reduce((a,sum)=> Number(a)+ Number(sum),0);
    let avance_diciembre= denominador_diciembre != 0 ? Number(((numerador_diciembre/denominador_diciembre)*100).toFixed(2)) : 0.0;
    let meta_diciembre=Number(this.dataMetaIndicador[0].meta)*100;


    let establecimientoRed:HIS={
      select:false,
      codigo_establecimiento:codigo_establecimiento,
      establecimiento:establecimiento,
      avance_total:[avance_total, numerador_total],
      meta_total:[meta_total, denominador_total],
      avance_enero: [avance_enero, numerador_enero],
      meta_enero:[meta_enero, denominador_enero],
      avance_febrero: [avance_febrero, numerador_febrero],
      meta_febrero:[meta_febrero, denominador_febrero],
      avance_marzo: [avance_marzo, numerador_marzo],
      meta_marzo: [meta_marzo, denominador_marzo],
      avance_abril: [avance_abril, numerador_abril],
      meta_abril:[meta_abril, denominador_abril],
      avance_mayo: [avance_mayo, numerador_mayo],
      meta_mayo:[meta_mayo, denominador_mayo],
      avance_junio: [avance_junio, numerador_junio],
      meta_junio: [meta_junio, denominador_junio],
      avance_julio: [avance_julio, numerador_julio],
      meta_julio: [meta_julio, denominador_julio],
      avance_agosto: [avance_agosto, numerador_agosto],
      meta_agosto: [meta_agosto, denominador_agosto],
      avance_septiembre: [avance_septiembre, numerador_septiembre],
      meta_septiembre: [meta_septiembre, denominador_septiembre],
      avance_octubre: [avance_octubre, numerador_octubre],
      meta_octubre: [meta_octubre, denominador_octubre],
      avance_noviembre: [avance_noviembre, numerador_noviembre],
      meta_noviembre: [meta_noviembre, denominador_noviembre],
      avance_diciembre:[avance_diciembre, numerador_diciembre],
      meta_diciembre:[meta_diciembre, denominador_diciembre],
    }
      

    return establecimientoRed;

  }

  buildGrafico(responseHIS:HIS){
    // informacion del gráfico
    this.areaChartData={
      labels:['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE','NOVIEMBRE', 'DICIEMBRE'],
      datasets:[
          {
              label:'Avances %',
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
              label:'Metas %',
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
              pointRadius:1,
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
          y:{
            max:100,
            min:0,
            ticks:{
              stepSize:5
            }
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
        subtitle:{
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
        },
        title:{
          display:true,
          text:[responseHIS.establecimiento],
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
