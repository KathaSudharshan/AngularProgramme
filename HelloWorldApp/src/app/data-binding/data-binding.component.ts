import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  fontColor = 'blue';
  sayHelloId = 1;
  canClick = true;
  message= "Hello From DataBindingComponent";
  sayMessage() {
    alert(this.message);
  }

}
