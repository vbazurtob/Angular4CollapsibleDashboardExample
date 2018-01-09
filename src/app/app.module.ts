import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';


import { MetricService } from './metric.service';

import { CollapsibleModule } from 'angular2-collapsible';
import { SvgComputerComponent } from './svg-computer/svg-computer.component';
import { SvgFirewallComponent } from './svg-firewall/svg-firewall.component';
import { SvgArrowUpComponent } from './svg-arrow-up/svg-arrow-up.component';
import { SvgArrowDownComponent } from './svg-arrow-down/svg-arrow-down.component';
import { SvgArrowRightComponent } from './svg-arrow-right/svg-arrow-right.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartLinePercentageComponent } from './chart-line-percentage/chart-line-percentage.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SvgComputerComponent,
    SvgFirewallComponent,
    SvgArrowUpComponent,
    SvgArrowDownComponent,
    SvgArrowRightComponent,
    PieChartComponent,
    ChartLinePercentageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollapsibleModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [MetricService],
  bootstrap: [AppComponent]
})
export class AppModule { }
