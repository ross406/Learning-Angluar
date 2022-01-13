import { Component } from '@angular/core';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mainApplicationTitle: string;
  constructor(myserviceObject: DemoServiceService) {
    this.mainApplicationTitle = myserviceObject.GreetYourCustomer();
  }
}
