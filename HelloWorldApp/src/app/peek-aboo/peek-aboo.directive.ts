import { Directive, OnInit } from '@angular/core';

import { LoggerService } from '../logger.service';

let nextId = 1;
@Directive({
  selector: '[appPeekABoo]'
})
export class PeekABooDirective implements OnInit{
   
  fName: string;
  constructor(private loggerService: LoggerService) { 
    this.fName = 'Chirangeevi';
  }

  ngOnInit(){
    this.logIt('OnInit');
    //this.name="Chirangeevi Konidela";
    
    
  }

  logIt(msg: string){
    this.loggerService.log(`#${nextId++} ${msg}`)
  }

}
