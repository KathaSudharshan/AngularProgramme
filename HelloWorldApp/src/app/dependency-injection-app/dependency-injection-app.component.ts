import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'dependency-injection-app',
  templateUrl: './dependency-injection-app.component.html',
  styleUrls: ['./dependency-injection-app.component.css']
})
export class DependencyInjectionAppComponent {

  count=0;
  constructor(private logger: LoggerService){}
   
  onLog(){
    this.logger.write(this.count);
    this.count++;
    alert(this.count);

  }

}
