import { Injectable } from '@angular/core';
import { favtechstacks } from './mydata';
@Injectable({
  providedIn: 'root',
})
export class DemoServiceService {
  constructor() {}
  GreetYourCustomer(): string {
    return 'Hello and Welcome to TGS';
  }
}
