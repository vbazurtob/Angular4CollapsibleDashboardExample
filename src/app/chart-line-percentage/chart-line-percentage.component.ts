import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-line-percentage',
  templateUrl: './chart-line-percentage.component.html',
  styleUrls: ['./chart-line-percentage.component.scss']
})
export class ChartLinePercentageComponent implements OnInit {

@Input()
private percentageCovered: number;
private percentageNotCovered: number;

  constructor() { 
    
    
    
  }

  ngOnInit() {
    this.percentageNotCovered = 1 - this.percentageCovered;
    this.percentageNotCovered = this.percentageNotCovered * 100;
    this.percentageCovered = this.percentageCovered * 100;
  }

}
