import { Component } from '@angular/core';

@Component({
  selector: 'directive-app',
  templateUrl: './directive-app.component.html',
  styleUrls: ['./directive-app.component.css']
})
export class DirectiveAppComponent {

  message= "I'm Read only"
  canEdit= false;

  onEditClick(){
     this.canEdit = ! this.canEdit;

    if(this.canEdit){
      this.message="You can edit me";
    }else{
      this.message="I'm read only";
    }

  }

}
