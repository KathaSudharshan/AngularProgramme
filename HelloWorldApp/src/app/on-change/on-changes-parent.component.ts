import { Component, ViewChild, OnInit } from '@angular/core';

import { Hero  } from './hero';

import { OnChangeComponent } from './on-change.component';

let nextIds = 0;
@Component({
    selector: 'on-changes-parent',
    templateUrl: './on-changes-parent.component.html',
    styles: ['']
  })
  export class OnChangesParentComponent implements OnInit{
    hero!: Hero;
    power = '';
    title = 'OnChanges';
    changesLog: string[]=[];
    @ViewChild(OnChangeComponent) childView!: OnChangeComponent;
  
    constructor() {
    this.changesLog.push(`#${nextIds++}: From Cons onChnage Parent `);
      this.reset();
    }

    ngOnInit() {
        this.power="Jagan";
        this.changesLog.push(`#${nextIds++}: From onInt onChnage Parent= `);
      }
    
    
    reset() {
      // new Hero object every time; triggers onChanges
      this.hero = new Hero('Chiranjeevi');
      // setting power only triggers onChanges if this value is different
      //this.power = 'Dance';
      if (this.childView) {
        this.childView.reset();
      }
    }
  }
  