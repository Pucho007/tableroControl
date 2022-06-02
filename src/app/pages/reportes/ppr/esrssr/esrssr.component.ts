import { Component, OnInit } from '@angular/core';
import { HIS, IDataTableActionComponent, IDataIndicador } from '../../../../@core/models/IDatatable.interface';
import { IFiltro, IFiltroIndicador, IDataFiltroSelect } from '../../../../@core/models/IFiltroSelect.interface';
import { IMetaIndicador } from '../../../../@core/models/IMeta.interface';
import { ICodigoIndicador } from '../../../../@core/models/IIndicador.inteface';
import { DataService } from '../../../../@core/services/data.service';
import { SelectService } from '../../../../@core/services/select/select.service';

@Component({
  selector: 'app-esrssr',
  templateUrl: './esrssr.component.html',
  styleUrls: ['./esrssr.component.scss']
})
export class EsrssrComponent implements OnInit {

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
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
      "A%",
      "M%",
    ],
    indexDisable: [0,1],
    rowBold:2
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

  //filtro por defecto

  filtroSelect:IFiltroIndicador={
    indicador:'G0001',
    annio:'2022'
  }

  //VARIABLE PARA GUARDAR LA INFORMACION QUE VIENE DEL API
  dataIndicador!:IDataIndicador[];

  //VARIABLE PARA GUARDAR LA META DEL INDICADOR
  dataMetaIndicador!:IMetaIndicador[];


  //VARIABLE GUARDAR EL TAB SELECCIONADO
  tabIndicador:any={
    tabTitle:'RESUMEN'
  }

  //VARIABLE PARA GUARDAR EL NOMBRE LARGO DEL INDICADOR

  codigo:ICodigoIndicador={
    indicador:''
  };

  nombre_largo_indicador:string='';
  
  constructor(private chartService:DataService, private selectFiltro:SelectService) { }


  ngOnInit(): void {
    //Rellenar el campo de filtro de indicador - annio
    this.setSelected();
    
    //
    this.filtrarData(this.filtroSelect);
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
          text:[this.nombre_largo_indicador, responseHIS.establecimiento],
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
    this.printRowDataTable(item);
  }

  filtrarData(item:IFiltroIndicador):void{
    this.filtroSelect={
      indicador:item.indicador,
      annio:item.annio
    };

    this.codigo={
      indicador: this.filtroSelect.indicador
    }

    //obtener el nombre largo del indicador
    this.chartService.getInfoIndicadorNombre(this.codigo).subscribe(({result})=>{
      this.nombre_largo_indicador=result.data[0].nombre_largo_Indicador_Especifico;

      //obtener la meta del indicador
      this.chartService.getInfoMeta(this.filtroSelect).subscribe(({result})=>{
        try {
          this.dataMetaIndicador= [... result.data];
        } catch (error) {
          this.dataTable.data=undefined;
        }
      });

      //Obtener la infomracion de cada establecimiento

      this.chartService.getInfo(this.filtroSelect).subscribe(({result})=>{
        try {
          this.dataIndicador=[... result.data];
          this.selectTab(this.tabIndicador);
        } catch (error) {
          this.dataTable.data=undefined;
        }

        console.log(this.nombre_largo_indicador);
        console.log(this.dataMetaIndicador);
        console.log(this.dataIndicador);
      });

    });


  }

  
  private setSelected():void{
    //filtro de indicadores de la BD
    this.selectFiltro.postInfo(this.filtroIndicador).subscribe(({result})=>{
      result.data.forEach((item:any) => 
        this.filtroSelectIndicador.data.push({
          name         : item.nombre_corto_Indicador_Especifico,
          value        : item.codigo_Indicador_Especifico,
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


  private printRowDataTable(data:any){
    //eliminamos las filas seleccionadas
    this.dataTable.data!.forEach(item => {
      item.select=false;
    });
    
    //seleccionamos la fila que queremos pintar
    data.select=true;
  }


  selectTab(item:any){
    switch (item.tabTitle) {
      case 'RESUMEN':
        this.obtenerDataResumen();
        this.tabIndicador={
          tabTitle:'RESUMEN'
        };
        break;
      case 'RED BONILLA - LA PUNTA':
        this.obtenerDataRedBonilla();
        this.tabIndicador={
          tabTitle:'RED BONILLA - LA PUNTA'
        };
        break;
      case 'RED BEPECA':
        this.obtenerDataRedBepeca();
        this.tabIndicador={
          tabTitle:'RED BEPECA'
        };
        break;
      case 'RED VENTANILLA':
        this.obtenerDataRedVentanilla();
        this.tabIndicador={
          tabTitle:'RED VENTANILLA'
        };
        break;
      default:
        this.obtenerDataRedOtros();
        this.tabIndicador={
          tabTitle:'NO PERTENECE A NINGUNA RED'
        };
        break;
    }
    
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
    this.dataTable.data=this.responseHIS;
    this.dataTable.meta=Number(this.dataMetaIndicador[0].meta);
    this.printRowDataTable(this.hospitalSeleccionado);
  }

  obtenerDataRedBonilla(){
    this.responseHIS=[];
    let dataIndicadorBONILLA:IDataIndicador[];
    let dataIndicadorManuelBonilla:IDataIndicador[];
    let dataIndicadorAlbertoBarton:IDataIndicador[];
    let dataIndicadorPuertoNuevo:IDataIndicador[];
    let dataIndicadorLaPunta:IDataIndicador[];
    let dataIndicadorSanJuanBosco:IDataIndicador[];
    let dataIndicadorSantaFe:IDataIndicador[];
    let dataIndicadorCallao:IDataIndicador[];
    let dataIndicadorJoseBoterin:IDataIndicador[];
    let dataIndicadorJoseOlaya:IDataIndicador[];
    let dataIndicadorMiguelGrau:IDataIndicador[];
    let dataIndicadorSantaRosa:IDataIndicador[];
    let dataIndicadorNestorGambetta:IDataIndicador[];
    let dataIndicadorRamonCastilla:IDataIndicador[];
    let dataIndicadorAcapulco:IDataIndicador[];
    let dataIndicadorJuanPablo:IDataIndicador[];

    dataIndicadorBONILLA=[... this.dataIndicador].filter(item => item.Red=='BONILLA - LA PUNTA');
    dataIndicadorManuelBonilla=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='MANUEL BONILLA');
    dataIndicadorAlbertoBarton=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='ALBERTO BARTON');
    dataIndicadorPuertoNuevo=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento== 'P.S. SANTA FE');
    dataIndicadorLaPunta=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='P.S. LA PUNTA  ( EX-LUIS VALLEJO SANTONI )');
    dataIndicadorSanJuanBosco=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='SAN JUAN BOSCO');
    dataIndicadorSantaFe=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='P.S. SANTA FE');
    dataIndicadorCallao=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='CALLAO');
    dataIndicadorJoseBoterin=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='JOSE BOTERIN');
    dataIndicadorJoseOlaya=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='P.S. JOSE OLAYA');
    dataIndicadorMiguelGrau=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='MIGUEL GRAU');
    dataIndicadorSantaRosa=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='P.S. SANTA ROSA');
    dataIndicadorNestorGambetta=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='NESTOR GAMBETTA');
    dataIndicadorRamonCastilla=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='RAMON CASTILLA');
    dataIndicadorAcapulco=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='CENTRO DE SALUD ACAPULCO');
    dataIndicadorJuanPablo=[... dataIndicadorBONILLA].filter(item => item.Nombre_Establecimiento=='JUAN PABLO II');


    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorBONILLA, 'RED BONILLA - LA PUNTA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorManuelBonilla, 'C.S. MANUEL BONILLA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorAlbertoBarton, 'C.S. ALBERTO BARTON'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorPuertoNuevo, 'C.S. PUERTO NUEVO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorLaPunta, 'C.S. LA PUNTA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorSanJuanBosco, 'C.S. SAN JUAN BOSCO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorSantaFe, 'C.S. SANTA FE'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorCallao, 'C.S. CALLAO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorJoseBoterin, 'C.S. JOSE BOTERIN'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorJoseOlaya, 'C.S. JOSE OLAYA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorMiguelGrau, 'C.S. MIGUEL GRAU'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorSantaRosa, 'C.S. SANTA ROSA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorNestorGambetta, 'C.S. NESTOR GAMBETTA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorRamonCastilla, 'C.S. RAMON CASTILLA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorAcapulco, 'C.S. ACAPULCO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorJuanPablo, 'C.S. JUAN PABLO II'));
    

    this.hospitalSeleccionado=this.responseHIS[0];
    this.buildGrafico(this.hospitalSeleccionado);
    this.dataTable.data=this.responseHIS;
    this.dataTable.meta=Number(this.dataMetaIndicador[0].meta);
    this.printRowDataTable(this.hospitalSeleccionado);
  }

  obtenerDataRedBepeca(){
    this.responseHIS=[];
    let dataIndicadorBepeca:IDataIndicador[];
    let dataIndicadorFaucett:IDataIndicador[];
    let dataIndicadorMillas:IDataIndicador[];
    let dataIndicadorOquendo:IDataIndicador[];
    let dataIndicadorSesquicentenario:IDataIndicador[];
    let dataIndicadorPrevi:IDataIndicador[];
    let dataIndicadorBocanegra:IDataIndicador[];
    let dataIndicadorAlamo:IDataIndicador[];
    let dataIndicadorAeropuerto:IDataIndicador[];
    let dataIndicadorRimac:IDataIndicador[];
    let dataIndicadorPoligono:IDataIndicador[];
    let dataIndicadorBellavista:IDataIndicador[];
    let dataIndicadorAltaMar:IDataIndicador[];
    let dataIndicadorMilagros:IDataIndicador[];
    let dataIndicadorCarmenLegua:IDataIndicador[];
    let dataIndicadorPerla:IDataIndicador[];

    dataIndicadorBepeca=[... this.dataIndicador].filter(item => item.Red=='BEPECA');
    dataIndicadorFaucett=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P. S. FAUCETT');
    dataIndicadorMillas=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S. 200 MILLAS');
    dataIndicadorOquendo=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento== 'PALMERAS DE OQUENDO');
    dataIndicadorSesquicentenario=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='C.S. SESQUICENTENARIO');
    dataIndicadorPrevi=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S. PREVI');
    dataIndicadorBocanegra=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S. BOCANEGRA');
    dataIndicadorAlamo=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S.EL ALAMO');
    dataIndicadorAeropuerto=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='AEROPUERTO');
    dataIndicadorRimac=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='PUESTO DE SALUD PLAYA RIMAC');
    dataIndicadorPoligono=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S. POLIGONO IV');
    dataIndicadorBellavista=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='C.S. BELLAVISTA PERU COREA');
    dataIndicadorAltaMar=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S. ALTA MAR');
    dataIndicadorMilagros=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='VILLA SR. DE LOS MILAGROS');
    dataIndicadorCarmenLegua=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S. CARMEN DE LA LEGUA');
    dataIndicadorPerla=[... dataIndicadorBepeca].filter(item => item.Nombre_Establecimiento=='P.S. LA PERLA');


    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorBepeca, 'RED BEPECA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorFaucett, 'C.S. FAUCETT'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorMillas, 'C.S. 200 MILLAS'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorOquendo, 'C.S. PALMERAS DE OQUENDO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorSesquicentenario, 'C.S. SESQUICENTENARIO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorPrevi, 'C.S. PREVI'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorBocanegra, 'C.S. BOCANEGRA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorAlamo, 'C.S.EL ALAMO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorAeropuerto, 'C.S. AEROPUERTO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorRimac, 'C.S. PLAYA RIMAC'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorPoligono, 'P.S. POLIGONO IV'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorBellavista, 'C.S. BELLAVISTA PERU COREA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorAltaMar, 'C.S. ALTA MAR'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorMilagros, 'C.S. VILLA SR. DE LOS MILAGROS'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorCarmenLegua, 'C.S. CARMEN DE LA LEGUA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorPerla, 'C.S. LA PERLA'));

    this.hospitalSeleccionado=this.responseHIS[0];
    this.buildGrafico(this.hospitalSeleccionado);
    this.dataTable.data=this.responseHIS;
    this.dataTable.meta=Number(this.dataMetaIndicador[0].meta);
    this.printRowDataTable(this.hospitalSeleccionado);
  }

  obtenerDataRedVentanilla(){
    this.responseHIS=[];

    let dataIndicadorVentanilla:IDataIndicador[];
    let dataIndicadorPachacutec:IDataIndicador[];
    let dataIndicador03Febrero:IDataIndicador[];
    let dataIndicadorBahiaBlanca:IDataIndicador[];
    let dataIndicadorCiudadPachacutec:IDataIndicador[];
    let dataIndicadorSantaRosaPachacutec:IDataIndicador[];
    let dataIndicadorAngamos:IDataIndicador[];
    let dataIndicadorHijosGrau:IDataIndicador[];
    let dataIndicadorDefensoresPatria:IDataIndicador[];
    let dataIndicadorVentanillaAlta:IDataIndicador[];
    let dataIndicadorVillaReyes:IDataIndicador[];
    let dataIndicadorLuisCasas:IDataIndicador[];
    let dataIndicadorMiPeru:IDataIndicador[];
    let dataIndicadorMarquez:IDataIndicador[];
    let dataIndicadorVentanillaEste:IDataIndicador[];
    let dataIndicadorVentanillaBaja:IDataIndicador[];


    dataIndicadorVentanilla=[... this.dataIndicador].filter(item => item.Red=='VENTANILLA');
    dataIndicadorPachacutec=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='MATERNO INFANTIL PACHACUTEC  PERU-COREA');
    dataIndicador03Febrero=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='03 DE FEBRERO');
    dataIndicadorBahiaBlanca=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. BAHIA BLANCA');
    dataIndicadorCiudadPachacutec=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento== 'P.S. CIUDAD PACHACUTEC');
    dataIndicadorSantaRosaPachacutec=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. SANTA ROSA DE PACHACUTEC');
    dataIndicadorAngamos=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P. S. ANGAMOS');
    dataIndicadorHijosGrau=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. HIJOS DEL ALMIRANTE GRAU');
    dataIndicadorDefensoresPatria=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. DEFENSORES DE LA PATRIA');
    dataIndicadorVentanillaAlta=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. VENTANILLA ALTA');
    dataIndicadorVillaReyes=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='CENTRO DE SALUD VILLA LOS REYES');
    dataIndicadorLuisCasas=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. LUIS FELIPE DE LAS CASAS');
    dataIndicadorMiPeru=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='PUESTO DE SALUD MI PERU');
    dataIndicadorMarquez=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='C.S. MARQUEZ');
    dataIndicadorVentanillaEste=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. VENTANILLA ESTE');
    dataIndicadorVentanillaBaja=[... dataIndicadorVentanilla].filter(item => item.Nombre_Establecimiento=='P.S. VENTANILLA BAJA');

    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorVentanilla, 'Red Ventanilla'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorPachacutec, 'C.S.M.I MATERNO INFANTIL PACHACUTEC  PERU-COREA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicador03Febrero, 'C.S. 03 DE FEBRERO'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorBahiaBlanca, 'C.S. BAHIA BLANCA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorCiudadPachacutec, 'C.S. CIUDAD PACHACUTEC'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorSantaRosaPachacutec, 'C.S. SANTA ROSA DE PACHACUTEC'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorAngamos, 'C. S. ANGAMOS'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorHijosGrau, 'C.S. HIJOS DEL ALMIRANTE GRAU'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorDefensoresPatria, 'P.S. DEFENSORES DE LA PATRIA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorVentanillaAlta, 'C.S. VENTANILLA ALTA'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorVillaReyes, 'C.S VILLA LOS REYES'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorLuisCasas, 'C.S. LUIS FELIPE DE LAS CASAS'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorMiPeru, 'C.S MI PERU'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorMarquez, 'C.S. MARQUEZ'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorVentanillaEste, 'C.S. VENTANILLA ESTE'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorVentanillaBaja, 'C.S. VENTANILLA BAJA'));
    
    this.hospitalSeleccionado=this.responseHIS[0];
    this.buildGrafico(this.hospitalSeleccionado);
    this.dataTable.data=this.responseHIS;
    this.dataTable.meta=Number(this.dataMetaIndicador[0].meta);
    this.printRowDataTable(this.hospitalSeleccionado);
  }

  obtenerDataRedOtros(){
    this.responseHIS=[];

    let dataIndicadorOtros:IDataIndicador[];
    let dataIndicadorCarrion:IDataIndicador[];
    let dataIndicadorSanJose:IDataIndicador[];
    let dataIndicadorVentanilla:IDataIndicador[];



    dataIndicadorOtros=[... this.dataIndicador].filter(item => item.Red=='NO PERTENECE A NINGUNA RED');
    dataIndicadorCarrion=[... dataIndicadorOtros].filter(item => item.Nombre_Establecimiento=='HOSPITAL DANIEL ALCIDES CARRION');
    dataIndicadorSanJose=[... dataIndicadorOtros].filter(item => item.Nombre_Establecimiento=='HOSPITAL SAN JOSE');
    dataIndicadorVentanilla=[... dataIndicadorOtros].filter(item => item.Nombre_Establecimiento=='HOSPITAL VENTANILLA');


    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorOtros, 'OTROS TOTAL'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorCarrion, 'HOSPITAL DANIEL ALCIDES CARRION'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorSanJose, 'HOSPITAL SAN JOSE'));
    this.responseHIS.push (this.obtenerDataTabla(dataIndicadorVentanilla, 'HOSPITAL VENTANILLA'));

    
    this.hospitalSeleccionado=this.responseHIS[0];
    this.buildGrafico(this.hospitalSeleccionado);
    this.dataTable.data=this.responseHIS;
    this.dataTable.meta=Number(this.dataMetaIndicador[0].meta);
    this.printRowDataTable(this.hospitalSeleccionado);
  }


  private obtenerDataTabla(dataRed:IDataIndicador[], establecimiento_tabla:string):HIS{
    
   
    let codigo_establecimiento='000000';

    let establecimiento=establecimiento_tabla;

    let meta = Number(this.dataMetaIndicador[0].meta);

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
      meta_total:[meta_total, Math.round(denominador_total*meta)],
      avance_enero: [avance_enero, numerador_enero],
      meta_enero:[meta_enero, Math.round(denominador_enero*meta)],
      avance_febrero: [avance_febrero, numerador_febrero],
      meta_febrero:[meta_febrero, Math.round(denominador_febrero*meta)],
      avance_marzo: [avance_marzo, numerador_marzo],
      meta_marzo: [meta_marzo, Math.round(denominador_marzo*meta)],
      avance_abril: [avance_abril, numerador_abril],
      meta_abril:[meta_abril, Math.round(denominador_abril*meta)],
      avance_mayo: [avance_mayo, numerador_mayo],
      meta_mayo:[meta_mayo, Math.round(denominador_mayo*meta)],
      avance_junio: [avance_junio, numerador_junio],
      meta_junio: [meta_junio, Math.round(denominador_junio*meta)],
      avance_julio: [avance_julio, numerador_julio],
      meta_julio: [meta_julio, Math.round(denominador_julio*meta)],
      avance_agosto: [avance_agosto, numerador_agosto],
      meta_agosto: [meta_agosto, Math.round(denominador_agosto*meta)],
      avance_septiembre: [avance_septiembre, numerador_septiembre],
      meta_septiembre: [meta_septiembre, Math.round(denominador_septiembre*meta)],
      avance_octubre: [avance_octubre, numerador_octubre],
      meta_octubre: [meta_octubre, Math.round(denominador_octubre*meta)],
      avance_noviembre: [avance_noviembre, numerador_noviembre],
      meta_noviembre: [meta_noviembre, Math.round(denominador_noviembre*meta)],
      avance_diciembre:[avance_diciembre, numerador_diciembre],
      meta_diciembre:[meta_diciembre, Math.round(denominador_diciembre*meta)],
    }
      

    return establecimientoRed;

  }



}
