import { Component, OnInit } from '@angular/core';
import { MetricService } from '../metric.service';
import { Metric } from '../metric';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  private furtherDetailsBoxContent:string = '';
  private furtherDetailsDisplayCssType:string='';
  private resultSmallText: string='';
  private resultBigText: string = '';
  private resultButtonText:string='';
  
  listMetrics : Metric[] = [];
  
  constructor(private metricsService : MetricService) { 
  
    this.listMetrics = metricsService.getAll();
  
  }

  ngOnInit() {
  }
  
  getClassForState(state){
    
    let className = '';
    if(state == 'Pending'){
        className = 'pending-element';
    }else if(state==='Running'){
        className = 'running-element';
    }else if(state==='Rejected'){
        className = 'rejected-element';
    }else if(state==='Complete'){
        className = 'complete-element';
    }else if(state==='Accepted'){
        className = 'accepted-element';
    }else{
        className = '';
    }
    
    
    return className;
  }
  
  getArrowClass(arrowMetric){
    let arrowClass = '';
    
    if( arrowMetric === 'up'  ){
        arrowClass = 'arrow-up-icon';
    }else if( arrowMetric === 'down'  ){
        arrowClass = 'arrow-down-icon';
    }else if( arrowMetric === 'right'  ){
        arrowClass = 'arrow-right-icon';
    }
    
    return arrowClass;
    
  }
  
  getTestPercentage(testObj){
     return Math.floor(testObj.passed/(testObj.passed+testObj.failed) *100);
                                                        
  }
  
  getCssClassByPercentage(percentage){
    let cssClass='';
    if(percentage >= 70){
        cssClass = 'green-percentage';
    }else if(percentage >= 50){
        cssClass = 'yellow-percentage';
    }else{
        cssClass = 'red-percentage';
    }
    
    return cssClass;
  }
  
  private makeFurtherDetailsBoxVisible(){
    this.furtherDetailsDisplayCssType='';
  }
  
  getFurtherDetailsForMetricCategory(event, metricCategory){
    this.makeFurtherDetailsBoxVisible();
    
    this.resultSmallText = metricCategory.resultSmall;
    this.resultBigText = metricCategory.resultBig;
    this.resultButtonText = metricCategory.btnText;
  
    
    //this.furtherDetailsBoxContent = "<div style='color:red'>HOLA</div>";
  }
  
  cleanFurtherDetailsBox(event){
    this.furtherDetailsDisplayCssType='none';
  }

}
