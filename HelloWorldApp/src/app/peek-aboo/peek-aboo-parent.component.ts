import { Component, Input } from "@angular/core";

@Component({
    selector: "peek-aboo-parent",
    template: `
     <h1>Hello from PeekABoo Parent</h1>
     <button type="button" (click)="update()">Change Name</button><br>

     <app-peek-aboo [name]='heroName'></app-peek-aboo>
    `
})
export class PeekABooParentComponent{
    heroName = 'charan';
    flag = false;
    
    toggle(){
        this.flag = true;
        if(this.flag){
            this.heroName =  'Bala';
        }
    }
    
    update(){
        this.heroName="NTR";
    }

}