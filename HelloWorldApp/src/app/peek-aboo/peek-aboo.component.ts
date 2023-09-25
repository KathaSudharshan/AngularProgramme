import { Component, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';

import { PeekABooDirective } from './peek-aboo.directive';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-peek-aboo',
  templateUrl: './peek-aboo.component.html',
  styleUrls: ['./peek-aboo.component.css']
})
export class PeekABooComponent extends PeekABooDirective implements OnChanges, 
DoCheck,AfterContentInit {
  
  @Input() name='';
  hookLog: string[]=[];
  initialVerb="Initialized"

   constructor(private logger: LoggerService){
     super(logger);
     this.hookLog = this.logger.logs;
     const is = this.name ? 'is' : 'is not';
     this.logIt(`name ${is} known at construction`);
     //this.name=`${is} ${this.initialVerb}`;
   }
   

   //Onchanges event 
   ngOnChanges(changes: SimpleChanges){

    for(const propName in changes){
      
      const msg: string[]=[];
       if(propName === 'name'){
        const curr=changes['name'].currentValue;
        msg.push(`name ${this.initialVerb} to ${curr}`);
       } else {
        msg.push(`${propName} is ${this.initialVerb}`);
       }
       this.logIt(`OnChanges: ${msg.join('; ')}`);
       this.initialVerb='changed';
    }
     
   }

   //Do check impl

   ngDoCheck(): void {
    this.logIt("From DoChek event");
   }
  
   //AfterContentInit impl
   ngAfterContentInit(){
    this.logIt("After Content Init");
   }
   


   reset(){
    this.name=this.fName;
   }
}
