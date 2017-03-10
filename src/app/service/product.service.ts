import { Injectable, Injector } from '@angular/core';
import { BagComponent } from "app/panel/bag/bag.component";

@Injectable()
export class ProductService {
  id: number = 0;
  name: string = "";
  description: string = "";
  characteristic: string = "";
  price: number = 0;

  constructor(Name?: string, Description?: string, Characteristic?: string, Price?: number) {
    this.name = Name;
    this.description = Description;
    this.characteristic = Characteristic;
    this.price = Price;
  }

  getFakeList() {
    let fakeProductList: Array<ProductService> = [];

    fakeProductList.push(new ProductService("Colde", "Savoir faire", "gentil", 90.99));
    fakeProductList.push(new ProductService("Colgate", "sourire blanc", "piquant", 2.38));
    fakeProductList.push(new ProductService("Colmax", "pate a soudé", "résistant", 8.92));
    fakeProductList.push(new ProductService("Pulpe", "Savoir faire", "gentil", 89.33));
    fakeProductList.push(new ProductService("Elements", "sourire blanc", "piquant", 0.38));
    fakeProductList.push(new ProductService("Hola", "pate a soudé", "résistant", 123.92));

    return fakeProductList;
  }


}
