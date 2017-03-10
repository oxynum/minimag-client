import { Injectable } from '@angular/core';

@Injectable()
export class SellerService {
  firstName: string = "";
  lastName: string = "";
  age: number = 0;
  
  constructor(FirstName?: string, LastName?: string, Age?: number) {
    this.firstName = FirstName;
    this.lastName = LastName;
    this.age = Age;
   }

  getFake(): SellerService {
    let sellerFake = (new SellerService("John", "Doe", 25));

    return sellerFake;
  }
}
