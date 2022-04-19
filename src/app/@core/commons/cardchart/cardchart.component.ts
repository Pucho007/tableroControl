import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardchart',
  templateUrl: './cardchart.component.html',
  styleUrls: ['./cardchart.component.scss']
})
export class CardchartComponent implements OnInit {

  //view: [number,number] = [800, 200];
  view: [number,number] = [0,0];

  single: any[]=[
    {
      "name": "Red Bonilla",
      "value": 8940000
    },
    {
      "name": "Red BEPECA",
      "value": 5000000
    },
    {
      "name": "Red Ventanilla",
      "value": 7200000
    }
  ];


  /*colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  */
  cardColor: string = 'white';

  constructor() { 
    
  }

  ngOnInit(): void {
    this.onResize();
  }

  onResize() {
    if(window.innerWidth<420){
      this.view = [window.innerWidth / 1.55, 300];
    }else{
      this.view = [window.innerWidth  / 1.55, 200];
    }
}

}
