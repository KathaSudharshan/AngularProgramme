import { Component } from '@angular/core';
import { LoggerService } from './dependency-injection-app/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'HelloWorldApp';
  count=0;
  constructor(private logger: LoggerService){}
   
  onLog(){
    this.logger.write(this.count);
    this.count++;
    alert(this.count);

  }


}


