import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
// import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnDestroy, OnInit, OnChanges {
  
  @Input("areaChartData") areaChartData:any;
  @Input("areaChartOptions") areaChartOptions:any;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartConfiguration['options'];
  public barChartData!: ChartData<'bar'>;

  data: any;
  options: any;
  themeSubscription: any;


  // public barChartPlugins = [
  //   DataLabelsPlugin
  // ];

  constructor(private theme: NbThemeService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.areaChartData.currentValue != changes.areaChartData.previousValue){
      this.barChartData=this.areaChartData;
      this.barChartOptions=this.areaChartOptions;
    }
  }

  ngOnInit(): void {
    //this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      //const colors: any = config.variables;
      //const chartjs: any = config.variables!.chartjs;

      /*this.data = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };*/


      
      this.barChartData=this.areaChartData;
      // this.data=this.areaChartData;

      this.barChartOptions=this.areaChartOptions;
      /*this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };*/
    //});
  }

  ngOnDestroy(): void {
    //this.themeSubscription.unsubscribe();
    console.log("destruido");
  }


}
