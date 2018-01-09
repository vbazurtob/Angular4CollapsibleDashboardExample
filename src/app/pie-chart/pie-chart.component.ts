import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  
  public pieChartLabels:string[] = ['Passed','Failed'];
  
  @Input()
  private passed: number;
  @Input()
  private failed: number;
  
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {
    pieceLabel: {
        render: 'label',
        fontSize: 14,
        overlap: true
    }
  };  
  
  public pieChartColors:Array<any> = [
    { 
      backgroundColor: ['rgba(46, 204, 113 ,1 )',  '#D98880']
    }  
  ];
  
  
 constructor() { }

  ngOnInit() {
    this.pieChartData = [this.passed, this.failed];
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
