import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  public newValue: String;
  constructor(myServiceObject: DemoServiceService) {
    this.newValue = myServiceObject.GreetYourCustomer();
  }

  ngOnInit(): void {}
}
