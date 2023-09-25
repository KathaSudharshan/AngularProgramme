import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

import { Hero } from './hero';
let nextId = 1;
@Component({
  selector: 'on-changes',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent implements OnInit, OnChanges {

  @Input() hero!: Hero;
  @Input() power= '';

  changesLog: string[]=[];

  ngOnChanges(changes: SimpleChanges){
    for(const propName in changes ){
      const chng=changes[propName];
      const cur=JSON.stringify(chng.currentValue);
      const prev=JSON.stringify(chng.previousValue);
      this.changesLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);

    }
  }

  ngOnInit() {
    //this.power="Jagan";
    this.changesLog.push(`#${nextId++}: From onInt onChnage `);
  }



  reset() { 
    
    this.changesLog = []; 
  }



}
