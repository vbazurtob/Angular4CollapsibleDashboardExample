import { Injectable, OnInit } from '@angular/core';

import  { Metric } from './metric';

const DATA = [
    {
        id: 1,
        type: 'build',
        name: 'Tenrox-R1_1235',
        owner: '',
        time: '',
        state: 'Pending',
        metrics: {
            boxColor: 'gray-box'
        },
        build: {
            boxColor: 'gray-box'
        },
        unitTest: {
            boxColor: 'gray-box'
        },
        functionalTest: {
            boxColor: 'gray-box'
        }
    },
    
    {
        id: 2,
        type: 'firewall',
        name: '432462',
        owner: 'jtuck',
        time: '4/18/2014 12:12pm',
        state: 'Running',
        metrics: {
            percentage: 70,
            boxColor: 'blue-progress-box'
        },
        build: {
            boxColor: 'gray-box'
        },
        unitTest: {
            boxColor: 'gray-box'
        },
        functionalTest: {
            boxColor: 'gray-box'
        }
    },
    
    {
        id: 3,
        type: 'firewall',
        name: '432461',
        owner: 'samy',
        time: '4/18/2014 10:53am',
        state: 'Rejected',
        metrics: {
            
            boxColor: 'red-box',
            test: 78,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            testArrow: 'up',
            maintArrow: 'up',
            securityArrow: 'up',
            workmanArrow: 'up',
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
            
        },
        build: {
            boxColor: 'green-box',
            debug: true,
            release: true,
            timestamp: '10:46am - 4/17/2014',
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        },
        unitTest: {
            boxColor: 'green-box',
            passed: 142,
            failed: 10,
            covered: 0.76,
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        },
        functionalTest: {
            boxColor: 'green-box',
            passed: 4321,
            failed: 2145,
            covered: 0.23,
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        }
    },
    
    {
        id: 4,
        type: 'build',
        name: 'Tenrox-R1_1234',
        owner: 'samy',
        time: '4/18/2014 10:53am',
        state: 'Complete',
        metrics: {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            boxColor: 'green-box',
            testArrow: 'down',
            maintArrow: 'down',
            securityArrow: 'down',
            workmanArrow: 'down',
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        },
        build: {
            debug: true,
            release: true,
            timestamp: '10:46am - 4/17/2014',
            boxColor: 'green-box',
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        },
        unitTest: {
            passed: 142,
            failed: 10,
            covered: 0.76,
            boxColor: 'green-box',
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        },
        functionalTest: {
            passed: 4321,
            failed: 2145,
            covered: 0.23,
            boxColor: 'green-box',
             resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        }
    },
    
    {
        id: 5,
        type: 'firewall',
        name: '432460',
        owner: 'samy',
        time: '4/17/2014 07:51am',
        state: 'Rejected',
        metrics: {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            boxColor: 'red-box',
            testArrow: 'right',
            maintArrow: 'right',
            securityArrow: 'right',
            workmanArrow: 'right',
            
            resultBig: 'Metrics Reduction',
            resultSmall: 'changes rejected',
            
            btnText: 'Find Issues'
        },
        build: {
            debug: true,
            release: true,
            timestamp: '10:46am - 4/17/2014',
            boxColor: 'gray-box',
            resultBig: 'Metrics Reduction',
            resultSmall: 'changes rejected',
            
            btnText: 'Find Issues'
        },
        unitTest: {
            passed: 142,
            failed: 180,
            covered: 0.76,
            boxColor: 'gray-box',
            resultBig: 'Accepted',
            resultSmall: '',
            btnText: 'Deploy'
        },
        functionalTest: {
            passed: 1900,
            failed: 4321,
            covered: 0.01,
            boxColor: 'gray-box',
            resultBig: 'Metrics Reduction',
            resultSmall: 'changes rejected',
            
            btnText: 'Find Issues'
        }
    },
    
        {
        id: 6,
        type: 'firewall',
        name: '432459',
        owner: 'samy',
        time: '4/16/2014 06:43am',
        state: 'Accepted',
        metrics: {
            boxColor: 'red-box',
            test: 78,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            testArrow: 'right',
            maintArrow: 'down',
            securityArrow: 'right',
            workmanArrow: 'right',
                 resultBig: 'Metrics Reduction',
            resultSmall: 'changes rejected',
            
            btnText: 'Find Issues'
        
        },
        build: {
            boxColor: 'green-box',
            debug: true,
            release: true,
            timestamp: '10:46am - 4/17/2014',
            resultBig: 'Auto-Merge',
            resultSmall: 'Change accepted',
            
            btnText: 'Find Issues'
        },
        unitTest: {
            boxColor: 'green-box',
            passed: 142,
            failed: 10,
            covered: 0.76,
            resultBig: 'Metrics Reduction',
            resultSmall: 'changes rejected',
            
            btnText: 'Find Issues'
        },
        functionalTest: {
            boxColor: 'green-box',
            passed: 4321,
            failed: 1000,
            covered: 0.73,
            resultBig: 'Metrics Reduction',
            resultSmall: 'changes rejected',
            
            btnText: 'Find Issues'
        }
    },
    
    
];

@Injectable()
export class MetricService{

  listMetrics : Metric[] = [];

  constructor() { 
    this.cloneObj();
  }
  
  ngOnInit(){
    
  }
  
  getAll(){
    return this.cloneObj();
  }
  
  private cloneObj(){
   return JSON.parse(JSON.stringify(DATA));
  }
  
 

}

